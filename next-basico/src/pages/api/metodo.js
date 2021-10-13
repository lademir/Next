export default (req, res) => {

    if(req.method === "GET"){
        res.status(200).json({nome: "Jonas"})
    }
    else{
        res.status(200).json({
            nome: "luiza"
        })
    }

}