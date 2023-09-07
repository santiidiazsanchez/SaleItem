import React from "react";
import { Card, CardBody, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { techItems } from "../data/techList"; // Importa la matriz de artículos tecnológicos

export default function ProductGrid() {
    return (
        <div className="gap-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {techItems.map((item, index) => (
                <Card
                    shadow="sm"
                    key={index}
                    isPressable
                >
                    <CardBody className="overflow-visible p-0">
                        <Image
                            isZoomed
                            shadow="sm"
                            radius="lg"
                            width="100%"
                            alt={item.title}
                            className="w-full object-cover d-block"
                            src={"https://app.requestly.io/delay/5000/" + item.img}
                        />
                    </CardBody>
                    <CardFooter className="text-small justify-between">
                        <b>{item.title}</b>
                        <p className="text-default-500">{item.price}</p>
                    </CardFooter>
                </Card>
            ))}
        </div>
    );
}
