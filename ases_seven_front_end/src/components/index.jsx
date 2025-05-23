// src/components/index.js

export { default as Header } from "./layout/Header";
export { default as Footer } from "./layout/Footer";

// Home components
export { default as Notifications } from "./home/Notifications";
export { default as MyCourses } from "./home/MyCourses";
export { default as MyDepartments } from "./home/MyDepartments";
export { default as MyChurchBlock } from "./home/MyChurch"; // Renomeie o componente para MyChurchBlock se for o caso
export { default as Highlights } from "./home/Highlights";
export { default as Calendar } from "./home/Calendar";
export { default as Links } from "./home/Links";
export { default as ProfileCard } from "./Profile/ProfileCard";

// Departments components (se houver)
export { default as DepartmentCard } from "./departments/DepartmentCard";

// MyChurch components
export { default as ChurchCard } from "./mychurch/ChurchCard";
export { default as DistrictHighlights } from "./mychurch/DistrictHighlights";
export { default as SpacePastors } from "./mychurch/SpacePastors";
export { default as SearchBar } from "./shared/SearchBar";
export { default as DistrictGoals } from "./mychurch/DistrictGoals"; // Renomeie o componente para MyChurch se for o caso
export { default as TalkPastor } from "./mychurch/TalkPastor"; // Renomeie o componente para MyChurch se for o caso
// Se tiver outros blocos específicos do MyChurch, exporte aqui também:
// export { default as DestaquesDistrito } from "./mychurch/DestaquesDistrito";
// export { default as MetasDistrito } from "./mychurch/MetasDistrito";
// export { default as ContatoPastor } from "./mychurch/ContatoPastor";
