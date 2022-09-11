import "./post.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Users } from "../../dummyData";
import { useState } from "react";
export const Post = ({ post }) => {
  const [like, setLike]= useState(post.like)
  const [islike, setIsLike]= useState(false)
  const likeHandler=()=>{
    setLike(islike ?like - 1 :like + 1)
      setIsLike(!islike)
  }
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src={Users.filter((u) => u.id === post.userId)[0].profilePicture}
              alt=""
              className="postProfileImg"
            />
            <span className="postUserName">
              {Users.filter((u) => u.id === post.userId)[0].username}
            </span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVertIcon />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img src={post.photo} className="postImg" alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              className="likeIcon" onClick={likeHandler}
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHwAAAB8CAMAAACcwCSMAAAAYFBMVEVekf////9Zjv9Siv9VjP/q7//V4f+qwv/8/f/6+/+Hqv+Cp//y9f9ol/9OiP+Mrv+Rsf/P3P+xx//b5f/k6/+lvv92n/+2y/98o/+9z//I1/9xnP9klP+euv+Xtf9GhP/NjHmrAAAFGElEQVRogc2b25aqMAyGS1tUkMMIKops5/3fcnMSobQhTWEx/92sET56SpM0ZZ69orwsbu/zPWa14vv5fSvKPCK8iFlyD0XKOBdCcs56cS6FqP9Mi4PlF9jAr89zLMUAVcWFjM/P6xbwKHsA4NEHPDJ0+5HwS5rIRXLPl0l6WQ9+yliCJPf8hGWnVeDRUQgbcichjsu9vwQPskraoxvJKgvc4JeY0Oqh9fHC2INwP/yloxv9hj4VXthNM524KEjw6OXQ41+Jl3niGeEX7tzsTpwbR94Ev63S7E7iZgUP0hXZNT3VLzotPIiJa9skGWvpOri/1nB/xbluzWngOVudXdNZjoHn1Qbsml7N6TP4dRt2Q5/5GSo82qLPezpTzY0KjylsLpJlJ6f+WQzDQwo7Scu8DJPlH8oQgpPsWr93lIjvFkcz/EJh81f/dIF4Wl5McJ+Art+X9Y8Hd8yY+Qb4gzTRxfPzPKbp/KGHZ7TN5AuPEHOOiUwHj4gu0xd+QnVdEmngpFXWwMvhFf8wr+DhHF5i+mwBjhu45KLCgxeRPV49JW7WvAIFXlAbzsR3t7rgXpIUU3hUUdnJyEFDwlkVTeBHqt80cQ6fyMX6sbIdPCCimfg3Yns37ILhwQiOsU06yXTM9n6wcPkcwYlLfNhT+hUT45/8wrETRX2D4hDneBvZrfUWTjNuvFLc4Tf+NTz9wFEbwlxCcUetlmtr4Rl5uiXPKdt72rShdX8a+JnkNP4obA/lSwyPnzu4TzEwfObw53avkX4Lx9qlidQB97zUrv8aN4DRel3+U9m2/dds68yL8KZhpFmu45bIRvwrCX9OHNXwnJLim+cagsOgvNPhCL5Z5jWcstA4LrcLBn71oDPbidKy3yh2HfICPV8bOeYR3IhEE+jrBU3mymMRYa5XS0nVQQXU9IjlG/Y67FLynJX29m3kLC+2HICLkoH2jSd8oi4Z+4s/x4E2a/lkN2hUXv4pmKgNiBI0G5xQ8sggD0DMsqaNRVKcJ0hg8MbfDOoYcVDf5ouPF4JQfgfnEw/ZHfi3AT7bVPQ6HWGfjj8YFKPp4dKURJ7pCvs2LwYZOAP8qANpBSd5qm3hsGu1NRzcVbeGZ9B8rygTzgIOxhEvwlKzgQMvb5aavZGxgIMNr40MaF6d4NHlAa602rxCG4sb/LrgvtYbC7SlOnZ7BLKbLRVyJlzHHDZwtTMBuVHOEw7cWWo3CtrvneEQu3EgIdfZGQ7vK3DQ4AoHE9lt0AA4mK5wMP5twyUgUHSCn/IHuM7bQBEIkZ3g0QsRIgOd42jhQHaXHADSIo5jDm4rfVrEnNBwhIORf58QMvf7hvBPKsz8I0c4lIQekoDG9Kdb0HCFhnxIfxpjST38k6qHdTpAp+HfxK8x5W2AM/bzVaoq7BSD0coo5W1K9hvhfFkQepLsN005I9xVk2OOQP+hc/h1HfjkgMdwtMXD01SBxWECoOnRlumUgFfniRb2CqyUQz3jcabNLMJKPc50OMi11+wgl36Eba35ETb98N5WusN76gGXtbRlC9SCDUvpCzaopSp2MpWqEIt0LGUq0qGVJ1nJXJ60bsGpTlBh1tbrDS5JIxbjIbVUjLdtGaLqfv2pAsx9S083K7rVXHD5a+XG+xZab1Birr/V8geL6719rxXse6HC2/UqibfvJRpv1+tDnsvFKeF8ccojXxmTK1wZa7TjZblW+10TbLXjBclW+10N7bTfpdjhC9a6DvwfjTBGaAOWlwIAAAAASUVORK5CYII="
              alt=""
            />
            <img onClick={likeHandler}
              className="likeIcon"
              src=" data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIMAAAB6CAMAAACr3hCFAAAAbFBMVEX/AAD/////3Nz/ysr/Fxf/i4v/p6f/mZn/tLT/bW3/zs7/8vL/goL/UlL/hYX/VVX/Hx//1dX/TEz/uLj/MTH/DQ3/Ozv/5ub/+fn/aWn/cXH/rKz/7e3/dXX/KSn/R0f/oaH/YWH/wMD/kZGVpfYNAAAEEUlEQVRogc2b24KCIBCGQTMzttIytbLz+7/jmpUlZwaU/ttthm8VBmYYERaLhLM4OecTtE2L3fIQlpLf0irDw3JXpFs0yc9JPAuJ5LdI9IcsPqeor0kezWW+OvZ51ID3lZ7jzIyhni4QX0WkehplVAhsF9Nam4FEAidP7QMJQbCX2ka858gyVH9SLw/tRM+i3Clt/yo1w4Z+k1zFrKeGPtYxnWwUDLX6H3lqwb6QQDSHaO2oadFnyE6abhrNKISZvumpv0QQ0E2jZc/R0sh2JmLQep1fSr5sE0PbmM8gX5E87Tpb3Wn0UcRjMH0KD+1ftvKgwFfMMmwAbprV3tqqIwpPG5ohA7lB6NDYHoC2WZ+hFsV4pQIcQE2LusdgOq0/WpdrsG3yzQCbDE+BnyB6T4mWobJwY6eqYzCPDK4UvRmINwSEyIvh7pHh/mQgW48MW9IyTD0iIDRtGVZeGVYPBmiUdqWsYbh4Zrg0DPBQ60ZrjAidTY2tlKC5ZwTUENhsV260QRffCA0B/OTgSgnSTY6G08LqCOJGBfK9NNEPEDzkc+N+E/h/EikyyPYH0gmdfSOg9Q/EqD2C5asuFf3AfjH9gX3z9gPnhwDVWvXIAZVWCOeeGZrzJD56ZogbBt+Tct4wBH53rYL4z/WObb4JKUy6U9gylD4RiupZA7l6ZIhfdRizcr1bvWtB2B/CsavL+ZuVZcfgrTCXfNVpPVXmtsEXQ+3nZBv1auZeanMn0r+/8JH6ho7uUCx0ZO6Sxq+bVwwDHntahphlAF8JwXTHHIZx18bnarR/zzviyTKvBQzVeCXbXtdA7869HgshxEKGseYl1bZA9WCEYyBMsZRhjGwjxgoG8OW1tpb0iJy+oIEhjsyAvP6oQU92f+x43B6ty3AIEWc4fq/aYBB33miCfrmBMg5mRcgY8G0IBDouKBjwzX1FgG7qUjLg0HWd6iYaScyAA7fVdEnDo5gBE4fVspOs81PCgImzCs1a2nwqY8CVo4L6ld/DqsXg6MR/lY+hYnCxg/G2CCMG+2h1UY2gZsCh3RoVRiYTBhzYZGBztX8dBkzgd8GyVmwjBlwBq4eFXoe+FgMwBVtofiSgyQAJFAud7wNMGMxPmStdz/oMptGKc362ZzCLVmwW4YTBJBE0QTBiwNr3kAYvwpRBt3qn3KVsGHCmc8rkJjLuGHQgTBGMGdRlErO5AGJQzYmrsUMAg3yJAhAgDLJgtdLdI2wZxClxbvI5nR2DsKQrP8O7ZRBs5VqnJmcM3K9fmI+/Bmao2DxQUOEYjoG9hrtCPcEZ6IB5AjuyYKDCBGhVWjP0Po87WPixYfhqUTffqFwxdL1VOSREu2Hoti/h58IjMLziJb/8OhZD22WWW/qwZSjh20Snf4uDLQJppNVWAAAAAElFTkSuQmCC"
              alt=""
            />
            <span className="postLikeCounter">{like}</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
