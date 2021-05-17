function Avatar({ url, className }) {
  return (
    <img
      className={`h-10 w-10 object-cover object-top rounded-full cursor-pointer 
      transition duration-150 transform hover:scale-110 ${className}`}
      loading="lazy"
      src={url}
      alt="profile pic"
    />
  );
}

export default Avatar;
