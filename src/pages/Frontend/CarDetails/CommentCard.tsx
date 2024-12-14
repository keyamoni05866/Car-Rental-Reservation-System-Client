import { Rating } from "@smastrom/react-rating";
import { TComment } from "../../../Types";

const CommentCard = ({ comment }: { comment: TComment }) => {
  return (
    <div>
      <div className=" lg:w-[400px] lg:h-[230px]   shadow-md rounded-md border border-base-300 mx-auto p-4 lg:px-8 lg:py-2  hover:scale-90 duration-300">
        <Rating
          className="  mt-3"
          style={{ maxWidth: 100 }}
          value={comment?.rating}
          readOnly
        />
        <h3 className="  mt-3 font-semibold text-2xl mb-2  ">
          {comment?.user?.name}
        </h3>

        <p className="text-md text-gray-500   ">“{comment?.comment}”</p>
        <h4 className="text-sm text-gray-500  mt-3">
          {new Date(comment?.createdAt!).toLocaleTimeString("en-US", {
            hour12: true,
            timeZone: "Asia/Dhaka",
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          })}
        </h4>
      </div>
    </div>
  );
};

export default CommentCard;
