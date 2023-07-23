import React from "react";
import styles from "../../styles/styles";
import { IoBagHandleOutline } from "react-icons/io5";
import { HiOutlineMinus, HiPlus } from "react-icons/hi";
import { RxCross1 } from "react-icons/rx";
const SingleCartItem = ({ data }) => {
  return (
    <div className="border-b p-4">
      <div className="w-full flex items-center">
        <div>
          <div
            className={`bg-[#e44343] border border-[#e4434373] rounded-full w-[25px] h-[25px] justify-center cursor-pointer flex items-center`}
            //       onClick={() => increment(data)}
          >
            <HiPlus size={18} color="#fff" />
          </div>
          <span className="pl-[10px]">{data.qty}</span>
          <div
            className="bg-[#a7abb14f] rounded-full w-[25px] h-[25px] flex items-center justify-center cursor-pointer"
            //       onClick={() => decrement(data)}
          >
            <HiOutlineMinus size={16} color="#7d879c" />
          </div>
        </div>
        <img
          src={`${data?.image_Url[0]?.url}`}
          alt=""
          className="w-[30px] h-min ml-2 mr-2 rounded-[5px]"
        />
        <div className="pl-[5px]">
          <h1>{data.name.slice(0, 15)}</h1>
          <h4 className="font-[400] text-[15px] text-[#00000082]">
            {/* ${data.discountPrice} * {value} */}
          </h4>
          <h4 className="font-[600] text-[17px] pt-[3px] text-[#d02222] font-Roboto">
            {/* US${totalPrice} */} us$
          </h4>
        </div>
        <RxCross1
          className="cursor-pointer"
          //     onClick={() => removeFromCartHandler(data)}
        />
      </div>
    </div>
  );
};

export default SingleCartItem;
