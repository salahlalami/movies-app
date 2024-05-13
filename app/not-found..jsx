"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button, Result } from "antd";

const NotFound = () => {
  let router = useRouter();
  useEffect(() => {
    router.push("/notfound");
  }, []);

  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Button type="primary">
          <Link href="/">Return Home</Link>
        </Button>
      }
    />
  );
};
export default NotFound;
