const feedbackmodel = require("../model/feedback");

exports.createfeedback = async (req, res)=>{
    try{
        const newfeed = await feedbackmodel.create(req.body);
        res.status(201).json({"message":"User Added Successfully!"});
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.deletefeedback = async (req, res) => {
    try {
        const deletedfeedback = await feedbackmodel.findByIdAndDelete(req.params.id);
        if (!deletedfeedback) {
            res.status(400).json({ error: "FeedBack not found!!!!!!" });
        } else {
            res.status(200).json({ message: "User Deleted Sucessfully!" });
        }
        } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.listfeedback = async (req, res) => {
    //will add paging and 
    const feedbacklist = await  feedbackmodel.find();
    res.status(200).json(feedbacklist);
}


//Setup Is simple Create a model create controllers the create routes...
/*
1.For Models:-
    import mongoose 
    use the .Schema() and the define the schema 
2.For Controllers:-
    import the model the schema model created
    use exports to define the controllers use Functions like create(),find(),FindByIdAndDelete(),FindByIdAndupdate()
    
3.for Routes:-
    create express app
    create router using express.router()
    load ur createdcontroller
    define routes........
*/