
import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";
import { ChevronDown, ChevronUp } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  content: string;
}

const ServiceCard = ({ title, description, content }: ServiceCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Card className="mb-6 hover:shadow-lg transition-all duration-300">
      <CardContent className="pt-6">
        <Collapsible open={isOpen} onOpenChange={setIsOpen}>
          <CollapsibleTrigger className="w-full text-left group">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold text-therapy-primary mb-2">{title}</h3>
              {isOpen ? 
                <ChevronUp className="h-5 w-5 text-therapy-primary transition-all" /> :
                <ChevronDown className="h-5 w-5 text-therapy-primary transition-all" />
              }
            </div>
            <p className="text-gray-600 mb-2">{description}</p>
          </CollapsibleTrigger>
          <CollapsibleContent className="mt-4 text-gray-700 animate-accordion-down">
            {content}
          </CollapsibleContent>
        </Collapsible>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
