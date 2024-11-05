import {
    Button,
    Polygon1,
    Section,
    SectionTitle,
    TransparentTitle,
} from "@/components";
import { ArrowRight } from "iconsax-react";
import { Trans, useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Who() {
    const { t } = useTranslation();

    return (
        <div className="overflow-x-clip relative">
            <Section>
                <TransparentTitle className="absolute top-0 bottom-0 translate-x-1/2 truncate">
                    <Trans i18nKey="Who <1>are we ?</1>">
                        Who <span>are we ?</span>
                    </Trans>
                </TransparentTitle>

                <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 pt-8 lg:pt-24">
                    <div>
                        <SectionTitle>
                            <Trans i18nKey="Who <1>are we ?</1>">
                                Who <span>are we ?</span>
                            </Trans>
                        </SectionTitle>

                        <div className="lg:text-lg text-justify text-body space-y-4 mt-4">
                            <p>
                                <Trans i18nKey="About/Who/1">
                                    <strong>INTERIM PRO RH</strong> is a company
                                    founded by a group of executives from
                                    various sectors who have faced human
                                    resource issues throughout their different
                                    careers.
                                </Trans>
                            </p>

                            <p>
                                <Trans i18nKey="About/Who/2">
                                    <strong>INTERIM PRO RH</strong> aims to
                                    establish itself as a leading provider of
                                    employees for various organizations
                                    regardless of their industry. Today at
                                    INTERIM PRO RH, we focus on providing labor
                                    to companies located in Cameroon and the
                                    Central African sub-region.
                                </Trans>
                            </p>

                            <p>
                                <Trans i18nKey="About/Who/3">
                                    Our company receives hundreds of
                                    applications every day and offers a unique
                                    opportunity for employers and job seekers to
                                    meet for the success of their project. To do
                                    this, we provide a flexible and efficient
                                    communication channel for employers and
                                    future employees through digital means.
                                    <br />
                                    <br />
                                    We rely on a vast database filled with
                                    diverse and experienced profiles, classified
                                    by industry. We have a competent team for
                                    the efficient handling of any recruitment
                                    project and we strive to provide candidates
                                    with the most suitable position.
                                </Trans>
                            </p>
                        </div>

                        <div className="mt-8 lg:mt-20 text-center lg:text-left">
                            <Link to="/contact">
                                <Button size="xl" div>
                                    <span>
                                        <Trans i18nKey="Contact <1>us</1>">
                                            Contact <span>us</span>
                                        </Trans>
                                    </span>
                                    <ArrowRight className="size-6" />
                                </Button>
                            </Link>
                        </div>
                    </div>

                    <div className="relative lg:static h-[320px] lg:h-auto order-2 lg:order-1">
                        <Polygon1 mainSrc="/images/about-1.png" subSrc="/images/about-2.png" />
                    </div>
                </div>
            </Section>
        </div>
    );
}
