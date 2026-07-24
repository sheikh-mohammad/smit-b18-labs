import mongoose from "mongoose";

const stdSchema = new mongoose.Schema({
    firstName : String,
    lastName : String,
    email : String,
    age: Number
});

// model mongodb level pe collection hoga aur model hoga code level pe

const StdModel = mongoose.model("students", stdSchema);

export default StdModel;

// organization
// projects
// clusters
// databases
// collections/model (constructor se bana koi cheez aur table) -> schema (column) (constructor - blue print)
// documents (objects) (row)