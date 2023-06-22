import fredricka from '../components/fonts/fredricka';
export default function ourStory() {
    return (

      <div
      className="container flex flex-col  pb-4 lg:h-[90vh] items-center justify-center mx-auto"
      >
         <h1 className={`text-7xl   text-[#926D65] text-center ${fredricka.className} my-8 font-bold `}>OUR STORY</h1>
        <div className=" px-4 prose text-center w-full text-xl font-lovelo-line-bold flex flex-col items-center justify-center">
        We started out as three individuals passionate to create change about the perception and care of mental health in Bangalore. 

In Hindi, Sahai means “a helper or supporter”, which is exactly what we want to be. We want to help anyone who wants to know more about mental health. We want to support those who are struggling with their mental health. And we want to help push the conversation about mental health forward by normalizing it.

As an organization, we aim to destigmatize mental health through educating them about mental health, providing them with accessible mental health resources, and creating a community for them to connect with other people struggling with similar things.
        </div>
      </div>
    )
   
  }