command: npx inngest-cli@latest dev

# 1 NEXT JS

# 2 TAILWIND CSS

# 3 SHADE CN

npx shadcn@latest add accordion badge alert-dialog card dialog dropdown-menu input label progress radio-group select sonner tabs textarea

# clerk for user management

# neon postgryspl for database

# inngest (service) setup for managing background job like fetching the industry insights in every single week

# in project there is also clerk for user management but i also use user data table that store user data in database

# npm i react-hook-form zod @hookform/resolvers

1️⃣ react-hook-form
👉 What it does

A form state management library for React.

👉 Why it’s used

Handles form values, errors, touched state

Super fast (uncontrolled inputs)

Minimal re-renders

Much cleaner than useState for forms

2️⃣ zod
👉 What it does

A schema validation library.

You define rules for your data in one place.

Example:
import { z } from "zod";

const loginSchema = z.object({
email: z.string().email("Invalid email"),
password: z.string().min(6, "Min 6 characters"),
});

👉 Why it’s great

Type-safe

Reusable (frontend + backend)

Clear error messages

Works perfectly with TypeScript

3️⃣ @hookform/resolvers
👉 What it does

Connects react-hook-form with zod (or Yup, Joi, etc).

Without it, RHF cannot understand Zod schemas.

🔗 How they work together (big picture)
User Input
↓
react-hook-form (collects values)
↓
@hookform/resolvers (bridge)
↓
zod (validates data)
↓
Errors or Clean Data

# for quiz performance chart, there is use (rechart package).

# package for markdown editor: npm i @uiw/react-markdown-editor

# package to save markdown resume as pdf: npm i html2pdf
