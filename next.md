### Nextjs

Nextjs is a React framework for building web applications.


### React

It’s not feasible to create a fully featured application ready for production.

React is a library for building user interfaces.

You need to make decisions about other features such as routing, data fetching and more.


### Next.js

It uses React for building user interfaces.

Provides additional features that enable you to build production ready applications.

Features includes routing, optimized rendering, data fetching, bundling, compiling and more.

You don’t need to install additional packages as Next.js provides everything you need.

Opinios and conventions should be followd to implement these features.


### Why learn Next.js?

It simplifies the process of building a web application for production

1. Routing

Next.js provides file based routing.

2. API routes

3. Rendering

Next.js support both client side and server side rendering.

4. Data Fetching

5. Styling

6. Optimization

image and font optimization to improve performance

7. Dev and prod build system

### React Server Components

React server components is a new architecture introduced by the React team in version 18 which was quickly embraced by Next.js

The architecture introduces a new way of creating React compnonents, splitting them into two types

1. Server components
2. Client components

### Server Components

1. In Next.js, all components are Server components by default.

2. They have the ability to run tasks like reading files or fetching data from a database.

3. However, they don't have the ability to use hooks or handle user interactions.

### Client Components

1. To create a Client component, it's necessary to add "use client" at the top of the component file.

2. Client components can't perform tasks like reading files, but they have the ability to use hooks and manage interactions.

### React Server Components and Routing

1. We'll explore where we use server components that await certain actions to finalize before rendering content on the screen.

2. We'll also see examples where we use client components to leverage hooks from the routing module.

### Routing

1. Next.js has a file system based routing mechanism.

2. URL paths that users can access in the browser are defined by the files and folders in our codebase.

### Routing conventions

1. All routes must be placed inside the app folder.

2. Every file that corresponds to a route must be named page.js or page.ts or page.jsx or page.tsx

3. Every folder corresponds to a path segment in the browser URL.

### Routing

1. Suppose you want to show About page content on the screen. For that create a new folder with name 'about' and inside that folder, create a page.tsx file, and write your page content.

- about
-- page.tsx

2. Nested route

Suppose you want to show different Blogs data, like First blog or Second blog.

For that, create a new folder with name 'blog' and inside that folder, create a file named 'page.tsx' and write your blog page content.

inside blog folder, create a folder named "first" and inside that folder, create a file with named 'page.tsx' and write your first blog content.

do above same thing for second blog.

