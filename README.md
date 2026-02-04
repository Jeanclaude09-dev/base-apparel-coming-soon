# Frontend Mentor - Base Apparel coming soon page solution

This is a solution to the [Base Apparel coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/base-apparel-coming-soon-page-5d46b47f8db8a7063f9331a0). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [The challenge](#the-challenge)
- [Screenshot](#screenshot)
- [Links](#links)
- [Built with](#built-with)
- [What I learned](#what-i-learned)
- [Continued development](#continued-development)
- [Author](#author)

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty
  - The email address is not formatted correctly

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

### Built with

- Semantic HTML5 markup
- [Tailwindcss](https://tailwindcss.com/)
- [React](https://reactjs.org/) - JS library
- [Lucide](https://lucide.dev/) - Icon Library
- [Zod](https://zod.dev/)
- [React-hook-form](https://react-hook-form.com/)

### What I learned

- How to use react-hook-form to manage form submit

```js
const {
  register, // Connects input to form
  handleSubmit, // Wraps your submit function
  formState: { errors },
  reset,
} = useForm({
  resolver: zodResolver(emailSchema),
  defaultValues: {
    email: "",
  },
});
```

- I learned how to create custom schema with Zod:

```js
import { z } from "zod";

export const emailSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please provide a valid email"),
});
```

- This render the error message written with zod

```js
{
  errors.email.message;
}
```

- `--color-` can't handle gradient, but `--background-image`

```css
@theme {
  --background-image-gradient-first: linear-gradient(
    135deg,
    hsl(0, 0%, 100%),
    hsl(0, 100%, 98%)
  );
  --background-image-gradient-second: linear-gradient(
    135deg,
    hsl(0, 80%, 86%),
    hsl(0, 74%, 74%)
  );
}
```

- I stil can't write it myself but I learned how to write and async function and the way the app manages it, I still have to figure out how the setTimeout was used

```js
async function onSubmit(values) {
  setLoading(true);
  try {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    console.log("Form submitted:", values);
    reset();
  } catch (err) {
    console.error(err);
  } finally {
    setLoading(false);
  }
}
```

- Dynamic display based on the loading state:

```js
{
  loading ? (
    <LoaderCircle color="white" className="animate-spin" />
  ) : (
    <ChevronRight color="white" />
  );
}
```

### Continued development

- [React](https://reactjs.org/) - I want to get better at react
- [Zod](https://zod.dev/) - I still haven't figure out what it really is but love using it, it makes things easy
- [React-hook-form](https://react-hook-form.com/) - I only watched 2 minutes of youtube tutorial and I was able to pull this off so I will keep learning

## Author

- Frontend Mentor - [@jeanclaude09-dev](https://www.frontendmentor.io/profile/jeanclaude09-dev)
- Twitter - [@iamjeanclaude09](https://www.twitter.com/iamjeanclaude09)
- Github - [@jeanclaude09-dev](https://github.com/Jeanclaude09-dev)
