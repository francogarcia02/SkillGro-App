interface DataType {
   id: number;
   page: string;
   question: string;
   answer: string;
   class_name?:string;
}[];

const faq_data: DataType[] = [
   {
      id: 1,
      page: "home_1",
      question: "What’s Skillgrow Want to give you?",
      answer: "Groove’s intuitive shared inbox makes it easy for team members organize prioritize and.In this episode.urvived not only five centuries.Edhen an unknown printer took a galley of type and scrambl",
   },
   {
      id: 2,
      page: "home_1",
      question: "Why choose us for your education?",
      class_name:"collapsed",
      answer: "Groove’s intuitive shared inbox makes it easy for team members organize prioritize and.In this episode.urvived not only five centuries.Edhen an unknown printer took a galley of type and scrambl",
   },
   {
      id: 3,
      page: "home_1",
      question: "How We Provide Service For you?",
      class_name:"collapsed",
      answer: "Groove’s intuitive shared inbox makes it easy for team members organize prioritize and.In this episode.urvived not only five centuries.Edhen an unknown printer took a galley of type and scrambl",
   },
   {
      id: 4,
      page: "home_1",
      question: "Are you Affordable For Your Course",
      class_name:"collapsed",
      answer: "Groove’s intuitive shared inbox makes it easy for team members organize prioritize and.In this episode.urvived not only five centuries.Edhen an unknown printer took a galley of type and scrambl",
   },
];

export default faq_data;