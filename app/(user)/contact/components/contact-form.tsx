"use client";

// zod
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

// shadcn components
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

// icons
import { TbFidgetSpinner as SpinnerIcon } from "react-icons/tb";

// react form
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { submitContact } from "@/sanity/calls/submitContact";
import { useToast } from "@/components/ui/use-toast";

const formSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Name must be at least 3 characters long." })
    .max(20, { message: "Name can't exceed 20 characters." }),

  email: z
    .string()
    .nonempty({ message: "Email can't be empty." })
    .email({ message: "Please provide a valid email address." }),

  subject: z
    .string()
    .min(5, { message: "Subject must be at least 5 characters long." })
    .max(50, { message: "Subject can't exceed 50 characters." }),

  message: z
    .string()
    .min(5, { message: "Message must be at least 5 characters long." })
    .max(1500, { message: "Message can't exceed 1500 characters." }),
});

const ContactForm = () => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      message: "",
      name: "",
      subject: "",
    },
  });

  const formMutation = useMutation(
    () => {
      const { email, message, name, subject } = form.getValues();

      return submitContact({
        email,
        message,
        name,
        title: subject,
      });
    },
    {
      onSuccess: () => {
        toast({
          title: "Thanks for contacting",
        });
      },
      onError: (err) => {
        console.log(err);
        toast({
          title: "Something went wrong",
          variant: "destructive",
        });
      },
    }
  );

  const onSubmit = () => {
    formMutation.mutate();
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="block text-sm font-medium text-gray-900 dark:text-gray-100">
                Name
              </FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="Enter your name"
                  className="block w-full rounded-md border border-gray-300 dark:border-gray-500 px-4 py-3 text-gray-900 dark:text-gray-100 shadow-sm h-auto"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="block text-sm font-medium text-gray-900 dark:text-gray-100">
                Email
              </FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="block w-full rounded-md border border-gray-300 dark:border-gray-500 px-4 py-3 text-gray-900 dark:text-gray-100 shadow-sm h-auto"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="sm:col-span-2">
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="block text-sm font-medium text-gray-900 dark:text-gray-100">
                  Subject
                </FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Enter your subject"
                    className="block w-full rounded-md border border-gray-300 dark:border-gray-500 px-4 py-3 text-gray-900 dark:text-gray-100 shadow-sm h-auto"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="sm:col-span-2">
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <div className="flex justify-between">
                  <FormLabel className="block text-sm font-medium text-gray-900 dark:text-gray-100">
                    Message
                  </FormLabel>
                  <span id="message-max" className="text-sm text-gray-500">
                    Max. 1500 characters
                  </span>
                </div>
                <FormControl className="mt-1">
                  <Textarea
                    placeholder="Enter your message"
                    rows={5}
                    className="block w-full rounded-md border border-gray-300 dark:border-gray-500 px-4 py-3 text-gray-900 dark:text-gray-100 shadow-sm h-auto"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="sm:col-span-2 sm:flex sm:justify-end">
          <Button
            type="submit"
            disabled={formMutation.isLoading}
            className="w-full px-6 py-3 inline-flex items-center gap-2 sm:gap-4 text-base font-medium sm:w-auto h-auto "
          >
            {formMutation.isLoading && <SpinnerIcon className="animate-spin" />}
            Submit
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default ContactForm;
