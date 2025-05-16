// import { useState } from 'react';
// import { orders } from './data/orders';
// import './index.css';

// function App() {
//   const [selectedOrder, setSelectedOrder] = useState(null);

//   const formatTimeAgo = (date) => {
//     const seconds = Math.floor((new Date() - date) / 1000);
//     if (seconds < 60) return `${seconds} seconds ago`;
//     const minutes = Math.floor(seconds / 60);
//     if (minutes < 60) return `${minutes} minute${minutes === 1 ? '' : 's'} ago`;
//     const hours = Math.floor(minutes / 60);
//     if (hours < 24) return `${hours} hour${hours === 1 ? '' : 's'} ago`;
//     const days = Math.floor(hours / 24);
//     return `${days} day${days === 1 ? '' : 's'} ago`;
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 p-4 md:p-8">
//       {selectedOrder ? (
//         <div className="max-w-2xl mx-auto">
//           <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
//             {/* Header */}
//             <div className="bg-blue-50 p-4 border-b border-gray-200">
//               <button 
//                 onClick={() => setSelectedOrder(null)}
//                 className="flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium"
//               >
//                 <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
//                 </svg>
//                 Back to orders
//               </button>
//               <h2 className="text-xl font-semibold mt-2 text-gray-800">Order #{selectedOrder.orderNumber}</h2>
//             </div>

//             {/* Shipping Address */}
//             <div className="p-4 border-b border-gray-200">
//               <h3 className="text-sm font-medium text-gray-500 mb-1">Shipping to</h3>
//               <p className="text-gray-800">{selectedOrder.shippingDetails.address}</p>
//             </div>

//             {/* Order Details */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
//               <div>
//                 <p className="text-sm font-medium text-gray-500">Last updated</p>
//                 <p className="text-gray-800">{formatTimeAgo(selectedOrder.shippingDetails.lastUpdated)}</p>
//               </div>
//               <div>
//                 <p className="text-sm font-medium text-gray-500">Handler</p>
//                 <p className="text-gray-800">{selectedOrder.shippingDetails.handler}</p>
//               </div>
//               <div>
//                 <p className="text-sm font-medium text-gray-500">Packing slip</p>
//                 <p className="text-gray-800">
//                   {selectedOrder.shippingDetails.packingSlipPrinted ? (
//                     <span className="text-green-600">Printed</span>
//                   ) : (
//                     <span className="text-yellow-600">Not printed</span>
//                   )}
//                 </p>
//               </div>
//               <div>
//                 <p className="text-sm font-medium text-gray-500">Shipper</p>
//                 <p className="text-gray-800">{selectedOrder.shippingDetails.shipper}</p>
//               </div>
//             </div>

//             {/* Tracking Info */}
//             <div className="bg-gray-50 p-4">
//               <p className="text-sm font-medium text-gray-500 mb-1">Tracking number</p>
//               <p className="text-blue-600 font-medium">{selectedOrder.shippingDetails.trackingNumber}</p>
//             </div>
//           </div>
//         </div>
//       ) : (
//         <div className="max-w-2xl mx-auto">
//           <h1 className="text-xl font-semibold text-gray-800 mb-6">Order Tracking</h1>
          
//           <div className="space-y-3 ">
//             {orders.map(order => (
//               <div 
//                 key={order.id}
//                 onClick={() => setSelectedOrder(order)}
//                 className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 cursor-pointer hover:border-blue-300 transition-colors"
//               >
//                 <div className="flex justify-between items-start">
//                   <div>
//                     <h2 className="font-medium text-gray-800">#{order.orderNumber}</h2>
//                     <p className="text-gray-600 text-sm mt-1">{order.fullName}</p>
//                   </div>
//                   <span className={`px-2 py-1 text-xs rounded-full ${
//                     order.status === 'Processing' ? 'bg-yellow-100 text-yellow-800' :
//                     order.status === 'Shipped' ? 'bg-blue-100 text-blue-800' :
//                     'bg-green-100 text-green-800'
//                   }`}>
//                     {order.status}
//                   </span>
//                 </div>
//                 <div className="mt-2 flex items-center text-gray-500 text-sm">
//                   <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//                   </svg>
//                   {order.email}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;


import { useState } from 'react';
import { orders } from './data/orders';
import './index.css';

function App() {
  const [selectedOrder, setSelectedOrder] = useState(null);

  const formatTimeAgo = (date) => {
    const seconds = Math.floor((new Date() - date) / 1000);
    if (seconds < 60) return `${seconds} seconds ago`;
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes} minute${minutes === 1 ? '' : 's'} ago`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours} hour${hours === 1 ? '' : 's'} ago`;
    const days = Math.floor(hours / 24);
    return `${days} day${days === 1 ? '' : 's'} ago`;
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8 flex flex-col items-center">
      {selectedOrder ? (
        <div className="w-full max-w-2xl">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            {/* Header */}
            <div className="bg-blue-50 p-4 border-b border-gray-200">
              <button 
                onClick={() => setSelectedOrder(null)}
                className="cursor-pointer flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium"
              >
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to orders
              </button>
              <br />
              <h2 className="text-xl font-semibold mt-2 text-gray-800">Order #{selectedOrder.orderNumber}</h2>
            </div>

            {/* Shipping Address */}
            <div className="p-4 border-b border-gray-200">
              <h3 className="text-sm font-medium text-gray-500 mb-1">Shipping to</h3>
              <p className="text-gray-800">{selectedOrder.shippingDetails.address}</p>
            </div>

            {/* Order Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
              <div>
                <p className="text-sm font-medium text-gray-500">Last updated</p>
                <p className="text-gray-800">{formatTimeAgo(selectedOrder.shippingDetails.lastUpdated)}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Handler</p>
                <p className="text-gray-800">{selectedOrder.shippingDetails.handler}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Packing slip</p>
                <p className="text-gray-800">
                  {selectedOrder.shippingDetails.packingSlipPrinted ? (
                    <span className="text-green-600">Printed</span>
                  ) : (
                    <span className="text-yellow-600">Not printed</span>
                  )}
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Shipper</p>
                <p className="text-gray-800">{selectedOrder.shippingDetails.shipper}</p>
              </div>
            </div>

            {/* Tracking Info */}
            <div className="bg-gray-50 p-4">
              <p className="text-sm font-medium text-gray-500 mb-1">Tracking number</p>
              <p className="text-blue-600 font-medium">{selectedOrder.shippingDetails.trackingNumber}</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full max-w-2xl">
          <h1 className="text-xl font-semibold text-gray-800 mb-6 text-center">Order Tracking</h1>
          <br />
          <br />
          <div className="space-y-3 w-full">
            {orders.map(order => (
              <div 
                key={order.id}
                onClick={() => setSelectedOrder(order)}
                className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 cursor-pointer hover:border-blue-300 transition-colors w-full"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="font-medium text-gray-800">#{order.orderNumber}</h2>
                    <p className="text-gray-600 text-sm mt-1">{order.fullName}</p>
                  </div>
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    order.status === 'Processing' ? 'bg-yellow-100 text-yellow-800' :
                    order.status === 'Shipped' ? 'bg-blue-100 text-blue-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {order.status}
                  </span>
                </div>
                <div className="mt-2 flex items-center text-gray-500 text-sm">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {order.email}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;