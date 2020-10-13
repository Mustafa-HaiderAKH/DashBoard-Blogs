import Header from "../../componets/PureHeader";
import { Input, Button, Card, Popover, message } from "antd";
import { addArticle, getOneData, editArticle, deleteArticle } from "../api/api";
import { useRouter } from "next/router";
import { isValidElement, useEffect, useState } from "react";
const ModArticle = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [isCreate, setIsCreate] = useState(true);
  const [isDelete, setIsDelete] = useState(true);
  const router = useRouter();
  var ReactQuill;
  if (typeof window !== "undefined") {
    ReactQuill = require("react-quill");
  }
  useEffect(() => {
    if (router && router.query.id) {
      getOneData(router.query.id, (err, result) => {
        setTitle(result.article.title);
        setDescription(result.article.description);
        setImage(result.article.image);
        setText(result.article.text);
        setIsCreate(false);
        setIsDelete(false);
      });
    }
  }, [router]);
  const hadelrequest = () => {
    addArticle(
      {
        title,
        image,
        text,
        description,
        athor: JSON.parse(localStorage.getItem("blog_user")).id,
      },
      (err, result) => {
        if (err) throw err;
        if (!result.status) {
          Object.keys(result.errMsg).forEach((el) =>
            message.error(result.errMsg[el])
          );
        } else {
          router.push("/");
        }
      }
    );
  };
  const hadeldelete = () => {
    deleteArticle(router.query.id, (err, result) => {
      if (err) throw err;
      else {
        router.replace("/");
      }
    });
  };
  const editRequest = () => {
    editArticle(
      router.query.id,
      {
        image,
        text,
        description,
        title,
      },
      (err, result) => {
        if (err) throw err;
        if (!result.status) {
          Object.keys(result.errMsg).forEach((el) =>
            message.error(result.errMsg[el])
          );
        } else {
          router.push("/");
        }
      }
    );
  };
  return (
    <>
      <Header />
      <div className="container">
        <div className="blog-content">
          <Popover
            content={<img src={image && image} style={{ width: 400 }} />}
          >
            <Input
              placeholder="https://example/image.png"
              style={{ width: 400 }}
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </Popover>
          <Button
            type="primary"
            className="btn-save"
            onClick={isCreate ? hadelrequest : editRequest}
          >
            Save
          </Button>
        </div>
        <Input.TextArea
          rows={4}
          style={{ marginTop: 30 }}
          placeholder="Short Description . . ."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Card
          style={{ marginTop: 20 }}
          title={
            <input
              className="input-title"
              placeholder="Write Blog title . . ."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          }
        >
          {ReactQuill && (
            <ReactQuill
              theme="bubble"
              style={{ minHeight: 100 }}
              value={text}
              onChange={(value) => setText(value)}
            />
          )}
        </Card>
        <Button
          disabled={isDelete}
          style={{ marginTop: 50 }}
          type="primary"
          onClick={hadeldelete}
        >
          Delete Article
        </Button>
      </div>
    </>
  );
};
export default ModArticle;
