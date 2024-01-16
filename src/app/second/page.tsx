import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"


function page() {

    const datas = [
        {
            question : " what is my name ",
            answer : "Shivam"
        },
        {
            question : " what is his age",
            answer : " 21"
        },
        {
            question : "what's his favourite activity",
            answer : "playing cricket"
        }
    ];
    return (
        <main className="h-full flex flex-col justify-center items-center">
            <div>2nd page</div>
            
            <Accordion type="single" collapsible>
            
                <AccordionItem value="item-1">
                    
                    <AccordionTrigger>lick here to get your answer</AccordionTrigger>
                    <AccordionContent>
                       here is your Answer
                    </AccordionContent>
                    
                </AccordionItem>
                
            </Accordion>
        {/* {datas.map(data => (
            <ul>
                <li>{data.question}</li>
                <li>{data.answer}</li>
            </ul>
        ))} */}
        </main>
    )
}

export default page