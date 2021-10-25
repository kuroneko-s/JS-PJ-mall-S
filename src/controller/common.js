export const main = (req, res) => {
res.render("main")
}

export const itemDetail = (req, res) => res.render("itemdetail")

export const payment = (req, res) => res.render("payment")

export const success = (req, res) => res.render("success")

export const failed = (req, res) => res.render("failed")