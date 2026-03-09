import { Button, Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import Status from "./Status";

 function ProductViewModel({open,setOpen,product,isAvailable} ) {


  const {  id,
      productName,
      image,
      description,
      quantity,
      price,
      discount,
      specialPrice}= product;

  const handleClickOpen=()=>{
    setOpen(true);
  };

  return (
    <>
    

      <Dialog open={open} as="div" className="relative z-10" onClose={()=>setOpen(false)} __demoMode>
<DialogBackdrop className="fixed inset-0 bg-black/30"/>        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
             className="relative transform overflow-hidden rounded-lg bg-white transition-all w-full md:max-w-[620px] md:min-w-[620px] p-6"
            >
           <div className="flex flex-col md:flex-row gap-6">

  {/* Image */}
  {image && (
    <div className="md:w-1/2 flex justify-center">
      <img
        src={image}
        alt={productName}
        className="rounded-md object-contain max-h-[250px]"
      />
    </div>
  )}

  {/* Product Details */}
  <div className="md:w-1/2 flex flex-col justify-between">

    <div>
      <DialogTitle className="text-2xl font-semibold text-gray-800 mb-3">
        {productName}
      </DialogTitle>

      <p className="text-sm text-gray-500 mb-4">
        {description}
      </p>

      {/* Price */}
      <div className="flex items-center gap-3 mb-2">
        {specialPrice ? (
          <>
            <span className="text-2xl font-bold text-green-600">
              ₹{specialPrice}
            </span>
            <span className="text-gray-400 line-through">
              ₹{price}
            </span>
          </>
        ) : (
          <span className="text-2xl font-bold text-gray-800">
            ₹{price}
          </span>
        )}
      </div>

      {/* Stock */}
  <div className="mt-3">
  {isAvailable ? (
    <Status
      status="In Stock"
      color="bg-green-100 text-green-700"
      icon={FaCheckCircle}
    />
  ) : (
    <Status
      status="Out of Stock"
      color="bg-red-100 text-red-700"
      icon={FaTimesCircle}
    />
  )}


</div>

    </div>

    <div className="mt-6">
      <Button
        onClick={() => setOpen(false)}
        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
      >
        Close
      </Button>
      </div>

  </div>

</div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  )
}
export default ProductViewModel;