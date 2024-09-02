"use client";
import { cn } from "@/lib/utils";
import { FcMoneyTransfer } from "react-icons/fc";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

import useSWR from "swr";
import { Data } from "@/types/Data";
import DotPattern from "./magicui/dot-pattern";

const fetcher = (...args: Parameters<typeof fetch>): Promise<Data[]> =>
  fetch(...args)
    .then((res) => res.json())
    .then((json) => json.data);

const EarningsBoard = () => {
  const { data: datas, error } = useSWR<Data[]>(
    "/api/stripe-earning-board",
    fetcher,
    {
      refreshInterval: 1000,
    }
  );
  if (error) return <div>Failed to load</div>;
  if (!datas) return <div>Loading...</div>;

  return (
    <div className="w-[70%] max-h-[700px]">
      <Card>
        <CardHeader>
          <CardTitle>
            <span className=" flex items-center gap-3">
              Stripe Earnings Board <FcMoneyTransfer />
            </span>
          </CardTitle>
          <CardDescription className="flex items-center gap-2">
            <span className="text-md">Live Transactions</span>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[175px]">Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead className="text-center">Status</TableHead>
                <TableHead className="text-center">Product Name</TableHead>
                <TableHead className="text-center">Price</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {datas.map((data) => (
                <TableRow key={data.id}>
                  <TableCell className="font-medium">{data.userName}</TableCell>
                  <TableCell>{data.userEmail}</TableCell>
                  <TableCell className="text-center">
                    <Badge variant={"paid"} className=" text-white">
                      {data.paymentStatus.toUpperCase()}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-center">
                    {data.productName}
                  </TableCell>
                  <TableCell className="text-center">
                    ${data.productPrice}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default EarningsBoard;
