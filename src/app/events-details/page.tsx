import EventDetails from "@/components/inner-pages/events/event-details";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
   title: "Event Details SkillGro - Online Courses & Education React Next js Template",
};
const page = () => {
   return (
      <Wrapper>
         <EventDetails />
      </Wrapper>
   )
}

export default page