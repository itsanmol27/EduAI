import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export default function ContactPage() {
  return (
    <>
    <Header/>
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <Card className="overflow-hidden">
          <div className="grid lg:grid-cols-3">
            <div className="relative bg-orange-500 p-6 lg:p-10 text-white overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <p className="text-orange-50 mb-8">
                  Contact Us Today to Receive a Free Quote!
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-orange-200"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                    <a
                      href="mailto:admin@buildfastwithai.com"
                      className="text-orange-50 hover:text-white transition-colors"
                    >
                      admin@buildfastwithai.com
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-orange-200"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    <span className="text-orange-50">24/7 Business Hours</span>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 z-0">
                <div
                  className="absolute -bottom-1/4 -left-1/4 w-2/3 h-2/3 rounded-full bg-white"
                  style={{ opacity: 0.1 }}
                />
              </div>
            </div>

            <div className="lg:col-span-2 p-6 lg:p-10 bg-white">
              <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      First name
                    </label>
                    <Input
                      placeholder="Enter your first name"
                      className="bg-gray-50"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      Last name
                    </label>
                    <Input
                      placeholder="Enter your last name"
                      className="bg-gray-50"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      Email
                    </label>
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      className="bg-gray-50"
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        Phone
                      </label>
                      <span className="text-sm text-muted-foreground">Optional</span>
                    </div>
                    <Input
                      type="tel"
                      placeholder="Enter your phone number"
                      className="bg-gray-50"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Subject
                  </label>
                  <Input
                    placeholder="Enter message subject"
                    className="bg-gray-50"
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      Message
                    </label>
                    <span className="text-sm text-muted-foreground">0/500 characters</span>
                  </div>
                  <Textarea
                    placeholder="Enter your message"
                    className="min-h-32 bg-gray-50"
                  />
                </div>

                <div className="flex justify-end">
                  <Button
                    type="submit"
                    className="bg-orange-500 hover:bg-orange-600 text-white min-w-[120px]"
                  >
                    Submit
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </Card>
      </div>
    </section>
    <Footer/>
    </>
  );
}
