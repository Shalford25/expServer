import express from "express";
export const bookRouter = express.Router();
import pool from "./PoolConnection.js"

bookRouter.get("/books", async (req, res) => {
    try {
      const result = await pool.query("SELECT * from books");
      res.json({ rows:result.rows });
   //   console.log(result.rows.length);
    } catch (error) {
      console.error("Query error:", error);
      res.status(500).json({ error: "Database query failed" });
    }
  });

bookRouter.get("/getbook", async (req, res) => {
    try {
      var id1=req.query.id;
      console.log(id1);
      const result = await pool.query("select * from books where id="+id1);
      console.log(result);
      res.json({rows:result.rows});
     
    } catch (error) {
      console.error("Query error:", error);
      res.json({rows:[]});
     
    }
});
bookRouter.get("/deletebook", async (req, res) => {
    try {
      var id1=req.query.id;
      console.log(id1);
      const result = await pool.query("DELETE FROM books WHERE id="+id1);
      console.log(result);
      res.json({ans:1});
     
    } catch (error) {
      console.error("Query error:", error);
      res.json({ans:0});
     
    }
  });
  bookRouter.get("/addbook", async (req, res) => {
    try {
        var title="John the Baptist";
        var author="John";
        var price=200;
        var catid=5;
        
        var qry="INSERT INTO books (title,author,price,catid) VALUES ('"+title+"','"+author+"',"+price+","+catid+")";

      const result = await pool.query(qry);
      console.log(result);
      res.json({ans:1});
     
    } catch (error) {
      console.error("Query error:", error);
      res.json({ans:0});
     
    }
  });
  export default bookRouter;