"use client"
import { Button, Input, Card, Pagination } from "antd";
import { PlusOutlined } from "@ant-design/icons"; 
import { useState } from "react"; // Import useState for managing state

export default function Dashboard() {
  const cardData = [
    { title: "Default size card", width: 250 },
    { title: "Small size card", width: 250 },
    { title: "Small size card", width: 250 },
    { title: "Small size card", width: 250 },
    { title: "Small size card", width: 250 },
    { title: "Small size card", width: 250 },
    { title: "Small size card", width: 250 },
    { title: "Small size card", width: 250 },
    { title: "Small size card", width: 250 },
    { title: "Small size card", width: 250 },
    { title: "Last Card", width: 250 },
  ];

  // State to manage pagination
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 8; 

  // Calculate the index of the first and last card to display
  const indexOfLastCard = currentPage * pageSize;
  const indexOfFirstCard = indexOfLastCard - pageSize;
  const currentCards = cardData.slice(indexOfFirstCard, indexOfLastCard);

  // Function to handle page change
  const onChangePage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="p-6 h-full">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">Spaces</h2>
        <Button color="danger" icon={<PlusOutlined />}>Create a new space</Button>
      </div>
      <div className="flex mt-2">
        <Input placeholder="Search testimonials" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-2 mt-4">
        {currentCards.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            extra={<a href="#">More</a>}
            hoverable={true}
          >
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        ))}
      </div>
        <div className="flex justify-end">
      <Pagination
        current={currentPage}
        pageSize={pageSize}
        total={cardData.length}
        onChange={onChangePage}
        showSizeChanger={false} 
        className="mt-4"
        defaultCurrent={6} 
      />
      </div>
     
    </div>
  );
}
