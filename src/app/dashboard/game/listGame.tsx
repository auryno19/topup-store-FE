"use client";

import Button from "@/components/button";
import Card from "@/components/card";
import React from "react";

const ListGame = () => {
  return (
    <div className="flex flex-wrap gap-y-3 mt-3 ">
      <div className="w-1/2 px-2">
        <Card>
          <div className="flex flex-row justify-between items-center">
            <div className="w-1/4 bg-red-300 aspect-square"></div>
            <div className="w-1/2 px-3">
              <p className="text-lg">Title</p>
              <p className="text-sm">publisher</p>
            </div>
            <div className="flex flex-col gap-2">
              <Button
                loading={false}
                onClick={function (e: React.FormEvent): void {
                  throw new Error("Function not implemented.");
                }}
                value={"Edit"}
                type="warning"
                iconStart={<span className="flowbite--edit-solid mr-1"></span>}
              />
              <Button
                loading={false}
                onClick={function (e: React.FormEvent): void {
                  throw new Error("Function not implemented.");
                }}
                value={"Delete"}
                type="danger"
                iconStart={
                  <span className="fluent--delete-12-filled mr-1"></span>
                }
              />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ListGame;
