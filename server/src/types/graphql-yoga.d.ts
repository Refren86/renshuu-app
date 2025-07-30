import "graphql-yoga";

declare module "graphql-yoga" {
  interface YogaInitialContext {
    userId: string | null | undefined;
    role: "admin" | "subscriber" | null | undefined;
  }
}
