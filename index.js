const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/mongoDB")
  .then(() => console.log("DataBase is connected"))
  .catch(() => console.log("DataBase is not connected"));

// create Data Base

// const htmlFile = {
//   title: "html",
//   noOfVideos: 24,
//   cType: "Front End",
//   author: "Durga",
//   active: true,
// };

// schema and collections

// schema

const courseSchema = new mongoose.Schema({
  title: String,
  noOfVideos: Number,
  cType: String,
  author: String,
  active: Boolean,
});

// collections

const createData = new mongoose.model("createData", courseSchema);

// save()

// const courseRecords = async () => {
//   const Details = new createData(htmlFile);
//   Details.save();
//   console.log(Details);
// };

// courseRecords();

// const courseRecords = async () => {
//   const Details = await createData.create(
//     {
//       title: "html",
//       noOfVideos: 24,
//       cType: "Front End",
//       author: "Durga",
//       active: true,
//     },
//     {
//       title: "Node JS",
//       noOfVideos: 24,
//       cType: "Back End",
//       author: "Durga",
//       active: true,
//     },
//     {
//       title: "MongoDB",
//       noOfVideos: 24,
//       cType: "Back End",
//       author: "Durga",
//       active: true,
//     },
//     {
//       title: "JavaScript",
//       noOfVideos: 24,
//       cType: "Front End",
//       author: "Durga",
//       active: true,
//     },
//     {
//       title: "React JS",
//       noOfVideos: 24,
//       cType: "Front End",
//       author: "Durga",
//       active: true,
//     }
//   );
//   console.log(Details);
// };

// courseRecords();

const findData = async () => {
  // const Details = await createData.find({ cType: "Front End" }, { title: 1 });
  const Details = await createData.find(
    { cType: "Front End" },
    { title: 1, _id: 0 }
  );
  console.log(Details);
};
findData();
