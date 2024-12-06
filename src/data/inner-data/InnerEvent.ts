import { StaticImageData } from "next/image";

import event_thumb1 from "@/assets/img/events/event_thumb01.jpg"
import event_thumb2 from "@/assets/img/events/event_thumb02.jpg"
import event_thumb3 from "@/assets/img/events/event_thumb03.jpg"
import event_thumb4 from "@/assets/img/events/event_thumb04.jpg"
import event_thumb5 from "@/assets/img/events/event_thumb05.jpg"
import event_thumb6 from "@/assets/img/events/event_thumb06.jpg"
import event_thumb7 from "@/assets/img/events/event_thumb07.jpg"
import event_thumb8 from "@/assets/img/events/event_thumb08.jpg"

interface DataType {
  id: number;
  page: string;
  thumb: StaticImageData;
  date: string;
  title: string;
  location: string;
}[];

const inner_event_data: DataType[] = [
  {
    id: 1,
    page: "inner_1",
    thumb: event_thumb1,
    date: "25 June, 2024",
    title: "The Accessible Target Sizes Cheatsheet",
    location: "United Kingdom",
  },
  {
    id: 2,
    page: "inner_1",
    thumb: event_thumb2,
    date: "25 June, 2024",
    title: "Aewe Creating Futures Through Technology",
    location: "Tokyo Japan",
  },
  {
    id: 3,
    page: "inner_1",
    thumb: event_thumb3,
    date: "25 June, 2024",
    title: "Exactly How Technology Can Make Reading",
    location: "Colorado",
  },
  {
    id: 4,
    page: "inner_1",
    thumb: event_thumb4,
    date: "25 June, 2024",
    title: "Learning JavaScript With Imagination",
    location: "Alexander City",
  },
  {
    id: 5,
    page: "inner_1",
    thumb: event_thumb5,
    date: "25 June, 2024",
    title: "Make Your Magnificent May 2023 Edition",
    location: "Alaska",
  },
  {
    id: 6,
    page: "inner_1",
    thumb: event_thumb6,
    date: "25 June, 2024",
    title: "Accessible Target Sizes Cheatsheet",
    location: "Estes Park",
  },
  {
    id: 7,
    page: "inner_1",
    thumb: event_thumb7,
    date: "25 June, 2024",
    title: "Color mechanics that he came up with during",
    location: "Walsenburg",
  },
  {
    id: 8,
    page: "inner_1",
    thumb: event_thumb8,
    date: "25 June, 2024",
    title: "How To Design Effective User Onboarding",
    location: "New Work",
  },
  {
    id: 9,
    page: "inner_1",
    thumb: event_thumb7,
    date: "25 June, 2024",
    title: "Color mechanics that he came up with during",
    location: "Walsenburg",
  },
  {
    id: 10,
    page: "inner_1",
    thumb: event_thumb8,
    date: "25 June, 2024",
    title: "How To Design Effective User Onboarding",
    location: "New Work",
  },
  {
    id: 11,
    page: "inner_1",
    thumb: event_thumb5,
    date: "25 June, 2024",
    title: "Make Your Magnificent May 2023 Edition",
    location: "Alaska",
  },
  {
    id: 12,
    page: "inner_1",
    thumb: event_thumb6,
    date: "25 June, 2024",
    title: "Accessible Target Sizes Cheatsheet",
    location: "Estes Park",
  },
  {
    id: 13,
    page: "inner_1",
    thumb: event_thumb1,
    date: "25 June, 2024",
    title: "The Accessible Target Sizes Cheatsheet",
    location: "United Kingdom",
  },
  {
    id: 14,
    page: "inner_1",
    thumb: event_thumb2,
    date: "25 June, 2024",
    title: "Aewe Creating Futures Through Technology",
    location: "Tokyo Japan",
  },
  {
    id: 15,
    page: "inner_1",
    thumb: event_thumb3,
    date: "25 June, 2024",
    title: "Exactly How Technology Can Make Reading",
    location: "Colorado",
  },
  {
    id: 16,
    page: "inner_1",
    thumb: event_thumb4,
    date: "25 June, 2024",
    title: "Learning JavaScript With Imagination",
    location: "Alexander City",
  },
  {
    id: 17,
    page: "inner_1",
    thumb: event_thumb1,
    date: "25 June, 2024",
    title: "The Accessible Target Sizes Cheatsheet",
    location: "United Kingdom",
  },
];

export default inner_event_data;
