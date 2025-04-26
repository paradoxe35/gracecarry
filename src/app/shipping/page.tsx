import Link from 'next/link';
import Button from '@/components/ui/Button';

export default function ShippingPage() {
  return (
    <div className="g-container py-12">
      <h1 className="g-heading text-3xl mb-6">Shipping & Returns</h1>
      
      <div className="bg-white rounded-md shadow-soft p-8 mb-8">
        <div className="mb-12">
          <h2 className="text-2xl font-medium mb-6">Shipping Information</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-medium mb-4">Shipping Options</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-neutral-100">
                      <th className="border border-neutral-200 px-4 py-3 text-left">Shipping Method</th>
                      <th className="border border-neutral-200 px-4 py-3 text-left">Delivery Time</th>
                      <th className="border border-neutral-200 px-4 py-3 text-left">Cost</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-neutral-200 px-4 py-3">Standard Shipping</td>
                      <td className="border border-neutral-200 px-4 py-3">3-5 business days</td>
                      <td className="border border-neutral-200 px-4 py-3">
                        $9.99 (Free on orders over $100)
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-neutral-200 px-4 py-3">Express Shipping</td>
                      <td className="border border-neutral-200 px-4 py-3">1-2 business days</td>
                      <td className="border border-neutral-200 px-4 py-3">$12.99</td>
                    </tr>
                    <tr>
                      <td className="border border-neutral-200 px-4 py-3">Overnight Shipping</td>
                      <td className="border border-neutral-200 px-4 py-3">Next business day</td>
                      <td className="border border-neutral-200 px-4 py-3">$24.99</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-neutral-600 mt-2">
                * Business days are Monday through Friday, excluding holidays.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-medium mb-4">Shipping Policies</h3>
              <ul className="list-disc list-inside space-y-2 text-neutral-700">
                <li>
                  Orders are processed and shipped within 1-2 business days after payment confirmation.
                </li>
                <li>
                  You will receive a shipping confirmation email with tracking information once your order has been shipped.
                </li>
                <li>
                  We currently ship to the United States and Canada. For international shipping inquiries, please 
                  <Link href="/contact" className="text-primary hover:underline"> contact us</Link>.
                </li>
                <li>
                  Shipping times may be affected during peak seasons, holidays, or due to unforeseen circumstances.
                </li>
                <li>
                  For orders with multiple items, we may ship items separately to ensure the fastest delivery.
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-medium mb-4">Order Tracking</h3>
              <p className="text-neutral-700 mb-4">
                You can track your order by:
              </p>
              <ul className="list-disc list-inside space-y-2 text-neutral-700">
                <li>
                  Clicking the tracking link in your shipping confirmation email
                </li>
                <li>
                  Visiting the "Order History" section in your <Link href="/account/orders" className="text-primary hover:underline">account</Link>
                </li>
                <li>
                  Contacting our <Link href="/customer-service" className="text-primary hover:underline">customer service</Link> team with your order number
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mb-12">
          <h2 className="text-2xl font-medium mb-6">Returns & Exchanges</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-medium mb-4">Return Policy</h3>
              <ul className="list-disc list-inside space-y-2 text-neutral-700">
                <li>
                  We offer a 30-day return policy for all unworn items in their original condition with tags attached.
                </li>
                <li>
                  Sale items and accessories (jewelry, scarves, etc.) are final sale and cannot be returned unless defective.
                </li>
                <li>
                  Defective or damaged items can be returned within 14 days of receipt.
                </li>
                <li>
                  Return shipping costs are the responsibility of the customer, except for defective or incorrectly shipped items.
                </li>
                <li>
                  Refunds will be issued to the original payment method within 5-7 business days after we receive and process your return.
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-medium mb-4">How to Return an Item</h3>
              <ol className="list-decimal list-inside space-y-4 text-neutral-700">
                <li>
                  <span className="font-medium">Initiate a return:</span> Log into your account and go to "Order History" or contact our customer service team.
                </li>
                <li>
                  <span className="font-medium">Prepare your package:</span> Ensure all items are in their original condition with tags attached. Include your order number or the return form.
                </li>
                <li>
                  <span className="font-medium">Ship your return:</span> Use a trackable shipping method and send to the address provided in the return confirmation.
                </li>
                <li>
                  <span className="font-medium">Wait for confirmation:</span> You'll receive an email once your return is processed and your refund is issued.
                </li>
              </ol>
            </div>
            
            <div>
              <h3 className="text-xl font-medium mb-4">Exchanges</h3>
              <p className="text-neutral-700 mb-4">
                We currently do not offer direct exchanges. If you would like to exchange an item, please return the original item for a refund and place a new order for the desired item.
              </p>
            </div>
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-medium mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-4">
            <div className="border border-neutral-200 rounded-md p-4">
              <h3 className="font-medium mb-2">When will my order ship?</h3>
              <p className="text-neutral-600">
                Orders are typically processed and shipped within 1-2 business days after payment confirmation.
              </p>
            </div>
            
            <div className="border border-neutral-200 rounded-md p-4">
              <h3 className="font-medium mb-2">Can I change or cancel my order?</h3>
              <p className="text-neutral-600">
                You can request to change or cancel your order within 1 hour of placing it by contacting our customer service team. Once an order has been processed, we cannot make changes or cancel it.
              </p>
            </div>
            
            <div className="border border-neutral-200 rounded-md p-4">
              <h3 className="font-medium mb-2">How long will it take to receive my refund?</h3>
              <p className="text-neutral-600">
                Once we receive and process your return, refunds typically take 5-7 business days to appear on your original payment method. The timing may vary depending on your financial institution.
              </p>
            </div>
            
            <div className="border border-neutral-200 rounded-md p-4">
              <h3 className="font-medium mb-2">What if my item arrives damaged?</h3>
              <p className="text-neutral-600">
                If your item arrives damaged or defective, please contact our customer service team within 14 days of receipt. We'll provide instructions for returning the item and sending a replacement.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-neutral-700 mb-4">
            Have more questions about shipping or returns? We're here to help.
          </p>
          <Button variant="primary" href="/contact">
            Contact Customer Service
          </Button>
        </div>
      </div>
    </div>
  );
}