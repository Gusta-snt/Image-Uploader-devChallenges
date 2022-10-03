function ImageScreen({url,id}) {
	return (
		<section 
			id={id} 
			className="
        hidden
				flex 
				flex-col 
				justify-center 
				items-center 
				pt-[39px] 
				px-[31px]"
		>
        
      <span className="
      	material-symbols-rounded 
      	text-[#219653] 
      	text-[35px]
      ">
      	check_circle
      </span>
      
      <h2 className="
      	mt-[11px] 
      	text-lg 
      	text-[#4F4F4F] 
      	leading-[0.937rem] 
      	tracking-[-0.035em]
      ">
      	Uploaded Successfully!
      </h2>

      <img 
        id="image-from-image-screen"
      	src={url}
      	className="
      		mt-[25px]  
      		w-[338px] 
      		rounded-xl
      "/>

      <div className="
        mt-[25px] 
        mb-[33px] 
        bg-[#F6F8FB] 
        max-w-[338px] 
        py-[2px] 
        pl-[8px] 
        pr-[2px] 
        border-[1px] 
        border-solid 
        border-[#E0E0E0] 
        rounded-lg 
        flex 
        items-center
      ">
        <p
        id="text-url" 
        className="
          max-w-[70ch] 
          overflow-hidden 
          text-ellipsis 
          whitespace-nowrap
          text-[0.5rem] 
          text-[#4F4F4F] 
          leading-[1.68rem] 
          tracking-[-0.035em]
        ">
          {url}
        </p>
        <button className="
          ml-[15px] 
          py-[9px] 
          px-[20px] 
          rounded-lg 
          bg-[#2F80ED] 
          text-xs 
          text-white 
          leading-[1rem] 
          tracking-[-0.035em] 
          hover:bg-[#186CF0] 
          whitespace-nowrap
        ">
          Copy link
        </button>
      </div>
    </section>
	)
}

export default ImageScreen