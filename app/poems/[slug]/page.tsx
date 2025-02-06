import { poems } from "@/content/poems";

interface PageProps {
    params: { slug: string };
}

const Page: React.FC<PageProps> = ({ params }) => {
    const slug = parseInt(params.slug, 10);

    const item = poems[slug - 1];

    return (
        <div className="w-full h-auto py-[50px] justify-center items-center max-md:px-[10px] flex overflow-hidden">
            <div className="items-center flex justify-center flex-col px-[10px]">
                <h1 className="text-xl">{item.title}</h1>
                <div>
                    <p
                        className="mt-[20px] text-base"
                        dangerouslySetInnerHTML={{
                            __html: item.text.replace(/\n/g, "<br />"),
                        }}
                    />
                    {item.year && (
                        <p className="mt-[10px] text-sm text-accent w-full">
                            {item.year} год
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Page;
