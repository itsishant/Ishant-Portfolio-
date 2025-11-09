export const Photo = () => {
  return (
    <div className=" flex justify-end ">
      <div className="">
        <img
          className="rounded-full w-74 m-24 object-cover hover:border-5 hover:border-red-500 animate-pulse transition-all duration-30000"
          src="image.jpg"
          alt=""
        />
      </div>
    </div>
  );
};
