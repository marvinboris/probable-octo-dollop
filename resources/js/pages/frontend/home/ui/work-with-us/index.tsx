import { Section, SectionTitle, TransparentTitle } from "@/components";
import Block from "./block";
import { Reason } from "@types";

const reasons: Reason[] = [
    {
        title: "Expertise",
        body: "Benefit from our extensive knowledge and experience in providing high-quality services tailored to your specific needs. Our team of professionals is well-versed in the intricacies of the industry and can offer expert guidance to help you achieve your goals efficiently.",
    },
    {
        title: "Efficiency",
        body: "Save time and resources by working with us. Our streamlined processes and dedicated support ensure a smooth and prompt service delivery, allowing you to focus on your core tasks while we handle the rest with precision and speed.",
    },
    {
        title: "Reliability",
        body: "Count on us to deliver consistent and reliable services that meet your expectations. Our commitment to excellence and attention to detail guarantee that your needs are met with the highest level of professionalism and accuracy, building trust and long-lasting partnerships.",
    },
    {
        title: "Customer-centric",
        body: "Experience a personalized approach to service delivery that puts your needs first. Our customer-centric philosophy ensures that your satisfaction is our top priority, and we are always ready to listen, adapt, and go the extra mile to meet your requirements and exceed your expectations.",
    },
];

export default function WorkWithUs() {
    return (
        <Section className="mt-24 lg:mt-0">
            <TransparentTitle className="text-center">
                Why work with us
            </TransparentTitle>

            <SectionTitle className="!text-center">
                Why work <span>with us</span>
            </SectionTitle>

            <div className="mt-4 lg:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-3 lg:gap-y-9">
                {reasons?.map((reason, index) => (
                    <Block
                        key={"reason-block-" + index}
                        index={index}
                        {...reason}
                    />
                ))}
            </div>
        </Section>
    );
}
