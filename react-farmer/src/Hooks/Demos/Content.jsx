import { useEffect } from "react";
import { useState } from "react";

const contentList = [
  {
    id: 1,
    content: "Content 1",
  },
  {
    id: 2,
    content: "Content 2",
  },
  {
    id: 3,
    content: "Content 3",
  },
];

const Content = () => {
  const [contentId, setContentId] = useState(0);

  const handleChangeContent = (content) => {
    setContentId(content.id);
  };

  useEffect(() => {
    const handleContent = ({ detail }) => {
        console.log(detail);
    }
    console.log(contentId);
    window.addEventListener(`content-${contentId}`, handleContent);

    return () => {
      window.removeEventListener(`content-${contentId}`, handleContent);
      console.log('remove event');
    };
  }, [contentId]);

  return (
    <>
      <ul>
        {contentList.map((content, index) => (
          <li key={index} onClick={() => handleChangeContent(content)} style={{
              textDecoration: contentId === content.id ? 'line-through' : 'none'
          }}>
            {content.content}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Content;
