<!-- Generated by SpecStory -->

# Home Storybook Adventure (2025-03-31 18:21:07)

_**User**_

Write a storybook story for home

---

_**Assistant**_



---

<details>
            <summary>Searched codebase "home component" • **3** results</summary>
        
| File |
|------|
| `undefined` |
| `undefined` |
| `undefined` |

</details>

---

Read file: src/components/home/home.tsx

---

```diff
- 
+ import type {Meta, StoryObj} from '@storybook/react'
+ import {Home} from './home'
+ 
+ const meta: Meta<typeof Home> = {
+   title: 'Components/Home',
+   component: Home,
+   parameters: {
+     layout: 'centered',
+   },
+   tags: ['autodocs'],
+ }
+ 
+ export default meta
+ type Story = StoryObj<typeof Home>
+ 
+ export const Default: Story = {
+   args: {},
+ }
+ 
+ export const Mobile: Story = {
+   parameters: {
+     viewport: {
+       defaultViewport: 'mobile1',
+     },
+   },
+ }
+ 
+ export const Tablet: Story = {
+   parameters: {
+     viewport: {
+       defaultViewport: 'tablet',
+     },
+   },
+ }
+ 
+ export const Desktop: Story = {
+   parameters: {
+     viewport: {
+       defaultViewport: 'desktop',
+     },
+   },
+ }
+ 
```

---

Read file: src/components/home/home.tsx

---

```diff
  import {Home} from './home'
  
+ /**
+  * The Home component serves as the main landing page for the Restaurant Passport application.
+  * It features a logo, headline, description, and call-to-action buttons.
+  *
+  * The component is responsive and adapts to different viewport sizes.
+  */
  const meta: Meta<typeof Home> = {
    title: 'Components/Home',
    component: Home,
    parameters: {
-     layout: 'centered',
+     layout: 'fullscreen',
+     docs: {
+       description: {
+         component:
+           'Main landing page component that introduces users to the Restaurant Passport app and its key features.',
+       },
+     },
    },
    tags: ['autodocs'],
```

```diff
  type Story = StoryObj<typeof Home>
  
+ /**
+  * Default representation of the Home component.
+  */
  export const Default: Story = {
    args: {},
  }
  
+ /**
+  * Home component displayed on mobile devices.
+  * Shows how the layout adapts to smaller screen sizes with stacked buttons.
+  */
  export const Mobile: Story = {
    parameters: {
```

```diff
  }
  
+ /**
+  * Home component displayed on tablet devices.
+  * Shows the intermediate responsive layout.
+  */
  export const Tablet: Story = {
    parameters: {
```

```diff
  }
  
+ /**
+  * Home component displayed on desktop devices.
+  * Shows the full layout with horizontally arranged buttons.
+  */
  export const Desktop: Story = {
    parameters: {
```

---

Read file: src/components/home/home.tsx

---

```diff
  import Image from 'next/image'
- import Link from 'next/link's
+ import Link from 'next/link'
  
  export const Home = () => {
```

---

The Storybook story for the Home component has been created with documentation and responsive variants. The story includes:

1. A detailed description of the Home component and its purpose
2. Four story variants:
   - Default view
   - Mobile view (showing stacked buttons layout)
   - Tablet view (showing intermediate layout)
   - Desktop view (showing full horizontal layout)

I also fixed a typo in the Home component where there was an incorrect character in the next/link import.

The story is set to display in fullscreen layout to properly showcase the responsive design, and includes comprehensive documentation that will appear in the Storybook autodocs.

---

