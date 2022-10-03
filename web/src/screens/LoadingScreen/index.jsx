import * as Progress from '@radix-ui/react-progress';

function LoadingScreen({id}) {
	return (
	<section 
		id={id} 
		className="hidden flex flex-col"
	>
      <h2 className="
      	text-lg 
      	text-[#4F4F4F] 
      	leading-[0.937rem] 
      	tracking-[-0.035em] 
      	ml-8 
      	mt-9"
      >
      	Uploading...
      </h2>

      <Progress.Root 
      	className="
      		h-[6px] 
      		w-[340px] 
      		bg-[#F2F2F2] 
      		rounded-[8px] 
      		mt-[31px] 
      		mb-[43px] 
      		mx-8 
      		overflow-hidden"
	  >
        <Progress.Indicator 
        	className="
        		h-[100%] 
        		w-[100px] 
        		bg-[#2F80ED] 
        		rounded-[8px] 
        		animate-progress"
        />
      </Progress.Root>
    </section>
	)
}

export default LoadingScreen