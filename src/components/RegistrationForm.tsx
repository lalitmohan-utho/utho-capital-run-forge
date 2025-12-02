import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import { Calendar, MapPin } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  raceCategory: z.string().min(1, "Please select a race category"),
  age: z.coerce.number().min(1, "Please enter your age"),
  ageVerification: z.boolean().refine((val) => val === true, {
    message: "You must verify you meet the age requirements",
  }),
  paymentMethod: z.string().min(1, "Please select a payment method"),
});

interface RegistrationFormProps {
  children: React.ReactNode;
}

export default function RegistrationForm({ children }: RegistrationFormProps) {
  const [open, setOpen] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      raceCategory: "",
      age: undefined,
      ageVerification: false,
      paymentMethod: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log("Registration form values:", values);
    toast.success("Registration form submitted! Backend configuration pending.");
    setOpen(false);
    form.reset();
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Race Registration</DialogTitle>
          <DialogDescription>
            Fill in your details to register for The Capital Run 2026
          </DialogDescription>
          <div className="flex items-center gap-4 text-sm pt-3">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4 text-primary" />
              <span className="font-semibold text-foreground">1 March 2026</span>
            </div>
            <span className="text-muted-foreground">-</span>
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="font-semibold text-foreground">Jawaharlal Nehru Stadium, New Delhi</span>
            </div>
          </div>
          <div className="pt-2">
            <span className="inline-block bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
              Super early bird – save up to 50% till 31 December 2025
            </span>
          </div>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your full name" {...field} />
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
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="your.email@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input type="tel" placeholder="+91 XXXXX XXXXX" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="raceCategory"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Race Category</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your race category" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="21km">
                        <div className="flex flex-col py-1">
                          <span className="font-semibold">21 KM - Half Marathon (Age 16+)</span>
                          <div className="flex items-center gap-2 text-xs mt-1">
                            <span className="line-through text-muted-foreground">₹1,999</span>
                            <span className="font-bold text-primary">₹999</span>
                            <span className="text-muted-foreground">(save 50%)</span>
                          </div>
                        </div>
                      </SelectItem>
                      <SelectItem value="10km">
                        <div className="flex flex-col py-1">
                          <span className="font-semibold">10 KM - Impact Run (Age 16+)</span>
                          <div className="flex items-center gap-2 text-xs mt-1">
                            <span className="line-through text-muted-foreground">₹1,499</span>
                            <span className="font-bold text-primary">₹749</span>
                            <span className="text-muted-foreground">(save 50%)</span>
                          </div>
                        </div>
                      </SelectItem>
                      <SelectItem value="5km">
                        <div className="flex flex-col py-1">
                          <span className="font-semibold">5 KM - Speed Run (Age 14+)</span>
                          <div className="flex items-center gap-2 text-xs mt-1">
                            <span className="line-through text-muted-foreground">₹999</span>
                            <span className="font-bold text-primary">₹499</span>
                            <span className="text-muted-foreground">(save 50%)</span>
                          </div>
                        </div>
                      </SelectItem>
                      <SelectItem value="2.5km">
                        <div className="flex flex-col py-1">
                          <span className="font-semibold">2.5 KM - Fun Run (Open for all)</span>
                          <div className="flex items-center gap-2 text-xs mt-1">
                            <span className="line-through text-muted-foreground">₹799</span>
                            <span className="font-bold text-primary">₹399</span>
                            <span className="text-muted-foreground">(save 50%)</span>
                          </div>
                        </div>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="age"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Age</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="Enter your age" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="ageVerification"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border border-border p-4">
                  <FormControl>
                    <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>Age Verification</FormLabel>
                    <p className="text-sm text-muted-foreground">
                      I confirm that I meet the age requirements for my selected race category
                    </p>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="paymentMethod"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Payment Method</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select payment method" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="razorpay">Razorpay (Cards/UPI/Wallet)</SelectItem>
                      <SelectItem value="bank">Bank Transfer</SelectItem>
                      <SelectItem value="cash">Cash on Event Day</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex gap-4 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => setOpen(false)}
                className="flex-1"
              >
                Cancel
              </Button>
              <Button type="submit" className="flex-1">
                Submit Registration
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
