import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useCart } from '../../context/CartContext';
import { orderApi } from '../../services/api/order.api';
import { paymentApi } from '../../services/api/payment.api';
import AddressForm from './AddressForm';
import PaymentMethod from './PaymentMethod';
import OrderSummary from './OrderSummary';
import toast from 'react-hot-toast';

const checkoutSchema = z.object({
  shippingAddress: z.object({
    fullName: z.string().min(1, 'Full name is required'),
    addressLine1: z.string().min(1, 'Address is required'),
    addressLine2: z.string().optional(),
    city: z.string().min(1, 'City is required'),
    state: z.string().min(1, 'State is required'),
    pincode: z.string().min(6, 'Valid pincode is required'),
    phone: z.string().min(10, 'Valid phone number is required'),
    email: z.string().email('Valid email is required'),
  }),
  paymentMethod: z.enum(['online', 'cod']),
});

type CheckoutFormData = z.infer<typeof checkoutSchema>;

const Checkout: React.FC = () => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      paymentMethod: 'online',
    },
  });

  const paymentMethod = watch('paymentMethod');

  const onSubmit = async (data: CheckoutFormData) => {
    try {
      setLoading(true);

      // Create order
      const orderResponse = await orderApi.createOrder({
        shippingAddress: data.shippingAddress,
        paymentMethod: data.paymentMethod,
      });

      const order = orderResponse.data;

      if (data.paymentMethod === 'online') {
        // Create Razorpay order
        const razorpayResponse = await paymentApi.createRazorpayOrder({
          orderId: order.id,
        });

        const options = {
          key: import.meta.env.VITE_RAZORPAY_KEY_ID,
          amount: razorpayResponse.data.amount,
          currency: razorpayResponse.data.currency,
          name: 'E-commerce Store',
          description: `Order #${order.id}`,
          order_id: razorpayResponse.data.id,
          handler: async (response: any) => {
            try {
              await paymentApi.verifyPayment({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
              });

              toast.success('Payment successful!');
              clearCart();
              navigate(`/orders/${order.id}/track`);
            } catch (error) {
              toast.error('Payment verification failed');
            }
          },
          prefill: {
            name: data.shippingAddress.fullName,
            email: data.shippingAddress.email,
            contact: data.shippingAddress.phone,
          },
          theme: {
            color: '#3b82f6',
          },
        };

        const razorpay = new (window as any).Razorpay(options);
        razorpay.open();
      } else {
        // COD order
        await paymentApi.createCODOrder({ orderId: order.id });
        toast.success('Order placed successfully!');
        clearCart();
        navigate(`/orders/${order.id}/track`);
      }
    } catch (error: any) {
      toast.error(error.response?.data?.message || 'Failed to place order');
    } finally {
      setLoading(false);
    }
  };

  if (!cart || cart.items.length === 0) {
    navigate('/cart');
    return null;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>

      {/* Progress Steps */}
      <div className="mb-8">
        <div className="flex items-center justify-center">
          <div className={`flex items-center ${step >= 1 ? 'text-primary-600' : 'text-gray-400'}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${
              step >= 1 ? 'border-primary-600 bg-primary-600 text-white' : 'border-gray-300'
            }`}>
              1
            </div>
            <span className="ml-2">Address</span>
          </div>
          <div className={`w-16 h-0.5 mx-2 ${step >= 2 ? 'bg-primary-600' : 'bg-gray-300'}`} />
          <div className={`flex items-center ${step >= 2 ? 'text-primary-600' : 'text-gray-400'}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${
              step >= 2 ? 'border-primary-600 bg-primary-600 text-white' : 'border-gray-300'
            }`}>
              2
            </div>
            <span className="ml-2">Payment</span>
          </div>
          <div className={`w-16 h-0.5 mx-2 ${step >= 3 ? 'bg-primary-600' : 'bg-gray-300'}`} />
          <div className={`flex items-center ${step >= 3 ? 'text-primary-600' : 'text-gray-400'}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${
              step >= 3 ? 'border-primary-600 bg-primary-600 text-white' : 'border-gray-300'
            }`}>
              3
            </div>
            <span className="ml-2">Confirm</span>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {/* Address Form */}
            {step === 1 && (
              <AddressForm
                register={register}
                errors={errors}
                onNext={() => setStep(2)}
              />
            )}

            {/* Payment Method */}
            {step === 2 && (
              <PaymentMethod
                value={paymentMethod}
                onChange={(value) => setValue('paymentMethod', value as 'online' | 'cod')}
                onBack={() => setStep(1)}
                onNext={() => setStep(3)}
              />
            )}

            {/* Order Confirmation */}
            {step === 3 && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-bold mb-4">Confirm Order</h2>
                <p className="text-gray-600 mb-4">
                  Please review your order details before placing the order.
                </p>
                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex-1 bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 disabled:bg-gray-400"
                  >
                    {loading ? 'Processing...' : 'Place Order'}
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <OrderSummary cart={cart} />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Checkout;