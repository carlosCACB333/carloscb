import { Message } from "ai";
import clsx from "clsx";
import { BiUser } from "react-icons/bi";
import { FaRobot } from "react-icons/fa";

export const BootMessageItem = ({
  message,
  isTyping = false,
}: {
  message: Message;
  isTyping?: boolean;
}) => {
  return (
    <div
      key={message.id}
      className={clsx(
        "flex gap-1 items-end justify-end my-2",
        { "flex-row ml-6": message.role === "user" },
        { "flex-row-reverse mr-6": message.role !== "user" }
      )}
    >
      <span
        className={clsx("px-4 py-3 rounded-xl inline-block ", {
          "rounded-br-none bg-primary text-primary-foreground":
            message.role === "user",
          "rounded-bl-none bg-primary-900 dark:bg-primary-100":
            message.role !== "user",
        })}
        style={{
          overflowWrap: "anywhere",
        }}
      >
        {message.content}
      </span>

      <div className="text-2xl">
        {message.role === "user" ? (
          <BiUser className="text-primary-500" />
        ) : (
          <FaRobot
            className={clsx("text-primary-500", {
              "animate-bounce": isTyping,
            })}
          />
        )}
      </div>
    </div>
  );
};
