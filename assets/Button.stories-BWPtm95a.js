import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t}from"./iframe-CRUcC8Dt.js";import{n,t as r}from"./Button-CPpxA-MG.js";var i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T;function E(){return(E=e((()=>{n(),i=t(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/Button`,component:r,tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`primary`,`secondary`,`outline`,`ghost`,`link`],description:"Visual style of the button. `primary` = filled brand, `secondary` = filled neutral, `outline` = outlined border, `ghost` = transparent hover, `link` = text link.",table:{category:`Appearance`,defaultValue:{summary:`primary`}}},size:{control:`radio`,options:[`sm`,`md`,`lg`],description:"Button size — `sm` (Small), `md` (Medium), or `lg` (Large), matching Figma spacing and typography tokens.",table:{category:`Appearance`,defaultValue:{summary:`md`}}},disabled:{control:`boolean`,description:"Disables click interactions and applies muted styling. Uses `aria-disabled` (not native `disabled`) so the button stays keyboard-focusable.",table:{category:`State`,defaultValue:{summary:`false`}}},danger:{control:`boolean`,description:`Applies danger styling accents (red color palette) for destructive actions.`,table:{category:`Appearance`,defaultValue:{summary:`false`}}},children:{control:`text`,description:`Button label text.`,table:{category:`Content`}},leftIcon:{control:!1,description:`Optional React node rendered before the label (aria-hidden).`,table:{category:`Content`}},rightIcon:{control:!1,description:`Optional React node rendered after the label (aria-hidden).`,table:{category:`Content`}},onClick:{description:"Fired on click or Enter / Space key. Blocked when `disabled=true`.",table:{category:`Events`}},type:{control:`select`,options:[`button`,`submit`,`reset`],description:"Native button type. Defaults to `button` to prevent accidental form submits.",table:{category:`HTML`,defaultValue:{summary:`button`}}}},args:{onClick:a()},parameters:{docs:{description:{component:`Primary interactive control for the Faster design system.

Supports five visual variants (**primary**, **secondary**, **outline**, **ghost**, **link**), three sizes (**sm**, **md**, **lg**), optional left/right icons, danger variant modifier, and a disabled state that keeps the button keyboard-focusable (\`aria-disabled\`) while blocking all interactions.`}}}},s={args:{variant:`primary`,size:`md`,children:`Get started`}},c={args:{variant:`secondary`,size:`md`,children:`Learn more`}},l={args:{variant:`outline`,size:`md`,children:`Learn more`}},u={args:{variant:`ghost`,size:`md`,children:`Cancel`}},d={args:{variant:`link`,size:`md`,children:`Read terms`}},f={args:{variant:`primary`,danger:!0,size:`md`,children:`Delete Account`}},p={args:{variant:`outline`,danger:!0,size:`md`,children:`Discard changes`}},m={args:{variant:`ghost`,danger:!0,size:`md`,children:`Remove item`}},h={args:{variant:`link`,danger:!0,size:`md`,children:`Unsubscribe`}},g={args:{variant:`primary`,size:`sm`,children:`Small action`}},_={args:{variant:`primary`,size:`md`,children:`Medium action`}},v={args:{variant:`primary`,size:`lg`,children:`Large action`}},y={render:()=>(0,i.jsxs)(`div`,{className:`flex flex-wrap gap-3`,children:[(0,i.jsx)(r,{variant:`primary`,disabled:!0,children:`Primary`}),(0,i.jsx)(r,{variant:`secondary`,disabled:!0,children:`Secondary`}),(0,i.jsx)(r,{variant:`outline`,disabled:!0,children:`Outline`}),(0,i.jsx)(r,{variant:`ghost`,disabled:!0,children:`Ghost`}),(0,i.jsx)(r,{variant:`link`,disabled:!0,children:`Link`})]})},b={render:()=>(0,i.jsxs)(`div`,{className:`flex flex-wrap gap-3`,children:[(0,i.jsx)(r,{leftIcon:(0,i.jsx)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,"aria-hidden":`true`,children:(0,i.jsx)(`path`,{d:`M12 5v14M5 12l7-7 7 7`})}),children:`Upload`}),(0,i.jsx)(r,{variant:`outline`,rightIcon:(0,i.jsx)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,"aria-hidden":`true`,children:(0,i.jsx)(`path`,{d:`M5 12h14M12 5l7 7-7 7`})}),children:`Continue`}),(0,i.jsx)(r,{variant:`ghost`,leftIcon:(0,i.jsx)(`span`,{"aria-hidden":`true`,children:`★`}),rightIcon:(0,i.jsx)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,"aria-hidden":`true`,children:(0,i.jsx)(`path`,{d:`M6 9l6 6 6-6`})}),children:`Favourites`})]})},x={args:{variant:`outline`,children:null,"aria-label":`Settings`,leftIcon:(0,i.jsxs)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,"aria-hidden":`true`,children:[(0,i.jsx)(`circle`,{cx:`12`,cy:`12`,r:`3`}),(0,i.jsx)(`path`,{d:`M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z`})]})}},S={render:()=>(0,i.jsxs)(`div`,{className:`flex flex-wrap items-center gap-3`,children:[(0,i.jsx)(r,{size:`sm`,children:`Small`}),(0,i.jsx)(r,{size:`md`,children:`Medium`}),(0,i.jsx)(r,{size:`lg`,children:`Large`}),(0,i.jsx)(r,{variant:`outline`,size:`sm`,children:`Small Outline`}),(0,i.jsx)(r,{variant:`outline`,size:`md`,children:`Medium Outline`}),(0,i.jsx)(r,{variant:`outline`,size:`lg`,children:`Large Outline`})]})},C={args:{variant:`primary`,children:`Full Width Button`,className:`w-full`},render:e=>(0,i.jsx)(`div`,{style:{width:`300px`},className:`border border-dashed border-stroke p-4 rounded-lg`,children:(0,i.jsx)(r,{...e})})},w={args:{variant:`primary`,size:`md`,disabled:!1,danger:!1,children:`Playground button`}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    size: "md",
    children: "Get started"
  }
}`,...s.parameters?.docs?.source},description:{story:`Primary filled button using the brand color. Highest visual weight.`,...s.parameters?.docs?.description}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "secondary",
    size: "md",
    children: "Learn more"
  }
}`,...c.parameters?.docs?.source},description:{story:`Secondary filled button using neutral backgrounds. Lower visual weight.`,...c.parameters?.docs?.description}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "outline",
    size: "md",
    children: "Learn more"
  }
}`,...l.parameters?.docs?.source},description:{story:`Outline button with border. Great for medium-emphasis secondary actions.`,...l.parameters?.docs?.description}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "ghost",
    size: "md",
    children: "Cancel"
  }
}`,...u.parameters?.docs?.source},description:{story:`Ghost button with background only visible on hover. Ideal for tertiary actions.`,...u.parameters?.docs?.description}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "link",
    size: "md",
    children: "Read terms"
  }
}`,...d.parameters?.docs?.source},description:{story:`Link button styling for minimal text links.`,...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    danger: true,
    size: "md",
    children: "Delete Account"
  }
}`,...f.parameters?.docs?.source},description:{story:`Danger primary button for high-risk destructive actions.`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "outline",
    danger: true,
    size: "md",
    children: "Discard changes"
  }
}`,...p.parameters?.docs?.source},description:{story:`Danger outline button for secondary destructive actions.`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "ghost",
    danger: true,
    size: "md",
    children: "Remove item"
  }
}`,...m.parameters?.docs?.source},description:{story:`Danger ghost button for low-emphasis destructive actions.`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "link",
    danger: true,
    size: "md",
    children: "Unsubscribe"
  }
}`,...h.parameters?.docs?.source},description:{story:`Danger link button.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    size: "sm",
    children: "Small action"
  }
}`,...g.parameters?.docs?.source},description:{story:`Small size button — maps to the Figma 'Small' size token (12 px / Caption).`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    size: "md",
    children: "Medium action"
  }
}`,..._.parameters?.docs?.source},description:{story:`Medium size button — maps to the Figma 'Medium' size token (14 px / Body).`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    size: "lg",
    children: "Large action"
  }
}`,...v.parameters?.docs?.source},description:{story:`Large size button — maps to the Figma 'Large' size token (16 px / Subtitle).`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-3">
      <Button variant="primary" disabled>
        Primary
      </Button>
      <Button variant="secondary" disabled>
        Secondary
      </Button>
      <Button variant="outline" disabled>
        Outline
      </Button>
      <Button variant="ghost" disabled>
        Ghost
      </Button>
      <Button variant="link" disabled>
        Link
      </Button>
    </div>
}`,...y.parameters?.docs?.source},description:{story:"All variants in disabled state, shown side-by-side.\nNote: `aria-disabled` keeps each button focusable for keyboard users.",...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-3">
      <Button leftIcon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M12 5v14M5 12l7-7 7 7" />
          </svg>}>
        Upload
      </Button>
      <Button variant="outline" rightIcon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>}>
        Continue
      </Button>
      <Button variant="ghost" leftIcon={<span aria-hidden="true">★</span>} rightIcon={<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M6 9l6 6 6-6" />
          </svg>}>
        Favourites
      </Button>
    </div>
}`,...b.parameters?.docs?.source},description:{story:`Buttons with optional icon slots — left icon, right icon, or both.`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "outline",
    children: null,
    "aria-label": "Settings",
    leftIcon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
  }
}`,...x.parameters?.docs?.source},description:{story:"Button with an icon only, no text label. Renders as a perfect square. An explicit `aria-label` must be provided.",...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap items-center gap-3">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
      <Button variant="outline" size="sm">
        Small Outline
      </Button>
      <Button variant="outline" size="md">
        Medium Outline
      </Button>
      <Button variant="outline" size="lg">
        Large Outline
      </Button>
    </div>
}`,...S.parameters?.docs?.source},description:{story:`All sizes (sm, md, lg) side-by-side for comparison.`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    children: "Full Width Button",
    className: "w-full"
  },
  render: args => <div style={{
    width: "300px"
  }} className="border border-dashed border-stroke p-4 rounded-lg">
      <Button {...args} />
    </div>
}`,...C.parameters?.docs?.source},description:{story:`Full width button container layout.`,...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    size: "md",
    disabled: false,
    danger: false,
    children: "Playground button"
  }
}`,...w.parameters?.docs?.source},description:{story:`Interactive playground for controls validation.`,...w.parameters?.docs?.description}}},T=[`Primary`,`Secondary`,`Outline`,`Ghost`,`Link`,`DangerPrimary`,`DangerOutline`,`DangerGhost`,`DangerLink`,`Small`,`Medium`,`Large`,`Disabled`,`WithIcons`,`IconOnly`,`AllSizes`,`FullWidth`,`Playground`]})))()}E();export{S as AllSizes,m as DangerGhost,h as DangerLink,p as DangerOutline,f as DangerPrimary,y as Disabled,C as FullWidth,u as Ghost,x as IconOnly,v as Large,d as Link,_ as Medium,l as Outline,w as Playground,s as Primary,c as Secondary,g as Small,b as WithIcons,T as __namedExportsOrder,o as default};