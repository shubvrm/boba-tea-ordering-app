// import { getAuthSession } from "@/utils/auth";
// import { prisma } from "@/utils/connect";
// import { NextRequest, NextResponse } from "next/server";

// // GET SINGLE PRODUCTs
// export const GET = async (
//   req: NextRequest,
//   { params }: { params: { id: string } }
// ) => {
//   const { id } = params;

//   try {
//     const products = await prisma.productss.findUnique({
//       where: {
//         id: id,
//       },
//     });

//     return new NextResponse(JSON.stringify(products), { status: 200 });
//   } catch (err) {
//     console.log(err);
//     return new NextResponse(
//       JSON.stringify({ message: "Something went wrong!" }),
//       { status: 500 }
//     );
//   }
// };

// // DELETE SINGLE PRODUCTs
// export const DELETE = async (
//   req: NextRequest,
//   { params }: { params: { id: string } }
// ) => {
//   const { id } = params;
//   const session = await getAuthSession();

//   if (session?.user.isAdmin) {
//     try {
//       await prisma.productss.delete({
//         where: {
//           id: id,
//         },
//       });

//       return new NextResponse(JSON.stringify("Products has been deleted!"), {
//         status: 200,
//       });
//     } catch (err) {
//       console.log(err);
//       return new NextResponse(
//         JSON.stringify({ message: "Something went wrong!" }),
//         { status: 500 }
//       );
//     }
//   }
//   return new NextResponse(JSON.stringify({ message: "You are not allowed!" }), {
//     status: 403,
//   });
// };

import { getAuthSession } from "@/utils/auth";
import { prisma } from "@/utils/connect";
import { NextRequest, NextResponse } from "next/server";

// GET SINGLE PRODUCTS
export const GET = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  const { id } = params;

  try {
    const products = await prisma.products.findUnique({
      where: {
        id: id,
      },
    });

    return new NextResponse(JSON.stringify(products), { status: 200 });
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 }
    );
  }
};

// DELETE SINGLE PRODUCTS
export const DELETE = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  const { id } = params;
  const session = await getAuthSession();

  if (session?.user.isAdmin) {
    try {
      await prisma.products.delete({
        where: {
          id: id,
        },
      });

      return new NextResponse(JSON.stringify("Products has been deleted!"), {
        status: 200,
      });
    } catch (err) {
      console.log(err);
      return new NextResponse(
        JSON.stringify({ message: "Something went wrong!" }),
        { status: 500 }
      );
    }
  }
  return new NextResponse(JSON.stringify({ message: "You are not allowed!" }), {
    status: 403,
  });
};