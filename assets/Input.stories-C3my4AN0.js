import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t}from"./iframe-CRUcC8Dt.js";import{n,t as r}from"./Input-C4Gcr9wn.js";var i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b;function x(){return(x=e((()=>{n(),i=t(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/Input`,component:r,tags:[`autodocs`],argTypes:{label:{control:`text`,description:"Visible label text — associated with the input via `htmlFor` / `id` for screen reader support.",table:{category:`Content`}},placeholder:{control:`text`,description:`Placeholder shown when the input is empty.`,table:{category:`Content`}},helperText:{control:`text`,description:"Descriptive text below the field. Turns red and gains `role=alert` when `error=true`.",table:{category:`Content`}},error:{control:`boolean`,description:"Triggers error border colour, `aria-invalid=true`, and colours helperText red.",table:{category:`State`,defaultValue:{summary:`false`}}},disabled:{control:`boolean`,description:`Disables editing and applies muted styling.`,table:{category:`State`,defaultValue:{summary:`false`}}},required:{control:`boolean`,description:"Marks the field as required — adds a visible `*` to the label and a screen-reader-only `(required)` text.",table:{category:`State`,defaultValue:{summary:`false`}}},size:{control:`radio`,options:[`sm`,`md`,`lg`],description:`Size variant of the input field.`,table:{category:`Appearance`,defaultValue:{summary:`md`}}},value:{control:`text`,description:"Controlled value. Leave `undefined` for uncontrolled usage (React manages internal state).",table:{category:`Data`}},id:{control:`text`,description:"Explicit `id` for the `<input>`. If omitted, a unique id is auto-generated via `useId`.",table:{category:`HTML`}},onChange:{description:`Fires on every keystroke with the native input event.`,table:{category:`Events`}}},args:{onChange:a()},parameters:{docs:{description:{component:"Text input field for the Faster design system.\n\nSupports a visible **label** (with optional required marker), **placeholder**, **helper text**, and three states: **default**, **error**, and **disabled**.\n\nFull accessibility: label associated via `htmlFor`/`id`, `aria-invalid` on error, `aria-describedby` linking to helper text, and `role=alert` on error messages for screen readers.\n\nSupports sm, md, and lg size variants, and both **controlled** (`value` + `onChange`) and `uncontrolled` (no `value`) usage."}}}},s={args:{placeholder:`Enter text…`},parameters:{docs:{description:{story:`Minimal input — placeholder only, no label or helper text.`}}}},c={args:{label:`Full name`,placeholder:`Jane Doe`,id:`full-name`},parameters:{docs:{description:{story:"Label linked to the input via `htmlFor`/`id`. Clicking the label moves focus to the input — essential for a11y."}}}},l={args:{label:`Email address`,placeholder:`you@example.com`,helperText:`We'll never share your email with anyone.`,id:`email-helper`},parameters:{docs:{description:{story:"Helper text provides supporting context below the input. It is linked via `aria-describedby`."}}}},u={args:{label:`Email address`,placeholder:`you@example.com`,value:`not-an-email`,helperText:`Please enter a valid email address.`,error:!0,id:`email-error`},parameters:{docs:{description:{story:"Error state: red border + `aria-invalid=true` + helper text with `role=alert`. Screen readers announce the error immediately."}}}},d={args:{label:`Username`,value:`shashank_trivedi`,disabled:!0,id:`username-disabled`},parameters:{docs:{description:{story:`Disabled state — field is non-editable, visually muted, and correctly reported to assistive technology.`}}}},f={args:{label:`Password`,placeholder:`••••••••`,required:!0,id:`password-required`,type:`password`},parameters:{docs:{description:{story:"Required field: visible `*` marker with `aria-hidden=true` plus a screen-reader-only `(required)` text so all users understand the requirement."}}}},p={args:{label:`Email`,placeholder:`you@example.com`,required:!0,error:!0,helperText:`Email is required.`,id:`email-req-error`},parameters:{docs:{description:{story:`Required field in error state — the most complex combination.`}}}},m={args:{label:`Password`,placeholder:`••••••••`,type:`password`,id:`password-story`},parameters:{docs:{description:{story:"Password input utilizing browser masking (`type='password'`)."}}}},h={args:{label:`Age`,placeholder:`25`,type:`number`,min:0,max:120,id:`age-story`},parameters:{docs:{description:{story:`Number input restricting entry to numeric values with min/max bounds.`}}}},g={args:{label:`Search database`,placeholder:`Search users, transactions, logs...`,type:`search`,id:`search-story`},parameters:{docs:{description:{story:"Search input using `type='search'` to support clear controls in compatible browsers."}}}},_={args:{label:`Confirm your registered, verified and primary email address of record`,placeholder:`name@company.domain.co.uk`,helperText:`By submitting this, you confirm that you have read all terms of services, privacy policies, data usage terms, cookies policies and agree to receive marketing notifications from our subsidiaries.`,id:`long-text-story`},parameters:{docs:{description:{story:`Input displaying text wrap performance under long labels and helper texts.`}}}},v={render:()=>(0,i.jsxs)(`div`,{className:`flex flex-col gap-4 max-w-md`,children:[(0,i.jsx)(r,{size:`sm`,label:`Small size`,placeholder:`sm input`,helperText:`Helper text for small input`}),(0,i.jsx)(r,{size:`md`,label:`Medium size (default)`,placeholder:`md input`,helperText:`Helper text for medium input`}),(0,i.jsx)(r,{size:`lg`,label:`Large size`,placeholder:`lg input`,helperText:`Helper text for large input`})]})},y={args:{label:`Playground input`,placeholder:`Type something…`,helperText:`This is helper text.`,error:!1,disabled:!1,required:!1,size:`md`,id:`playground-input`},parameters:{docs:{description:{story:"Full interactive playground. Toggle `error`, `disabled`, `required`, `size` and edit `label` / `helperText` live in the **Controls** panel."}}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: "Enter text…"
  },
  parameters: {
    docs: {
      description: {
        story: "Minimal input — placeholder only, no label or helper text."
      }
    }
  }
}`,...s.parameters?.docs?.source},description:{story:`Bare input with no label or helper text.`,...s.parameters?.docs?.description}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Full name",
    placeholder: "Jane Doe",
    id: "full-name"
  },
  parameters: {
    docs: {
      description: {
        story: "Label linked to the input via \`htmlFor\`/\`id\`. Clicking the label moves focus to the input — essential for a11y."
      }
    }
  }
}`,...c.parameters?.docs?.source},description:{story:`Input with an associated label. Clicking the label focuses the input.`,...c.parameters?.docs?.description}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Email address",
    placeholder: "you@example.com",
    helperText: "We'll never share your email with anyone.",
    id: "email-helper"
  },
  parameters: {
    docs: {
      description: {
        story: "Helper text provides supporting context below the input. It is linked via \`aria-describedby\`."
      }
    }
  }
}`,...l.parameters?.docs?.source},description:{story:`Helper text guides the user without indicating an error.`,...l.parameters?.docs?.description}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Email address",
    placeholder: "you@example.com",
    value: "not-an-email",
    helperText: "Please enter a valid email address.",
    error: true,
    id: "email-error"
  },
  parameters: {
    docs: {
      description: {
        story: "Error state: red border + \`aria-invalid=true\` + helper text with \`role=alert\`. Screen readers announce the error immediately."
      }
    }
  }
}`,...u.parameters?.docs?.source},description:{story:"Error state — activates red border, `aria-invalid`, and red helper text with `role=alert`.",...u.parameters?.docs?.description}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Username",
    value: "shashank_trivedi",
    disabled: true,
    id: "username-disabled"
  },
  parameters: {
    docs: {
      description: {
        story: "Disabled state — field is non-editable, visually muted, and correctly reported to assistive technology."
      }
    }
  }
}`,...d.parameters?.docs?.source},description:{story:`Disabled — the field is non-editable with muted styling.`,...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Password",
    placeholder: "••••••••",
    required: true,
    id: "password-required",
    type: "password"
  },
  parameters: {
    docs: {
      description: {
        story: "Required field: visible \`*\` marker with \`aria-hidden=true\` plus a screen-reader-only \`(required)\` text so all users understand the requirement."
      }
    }
  }
}`,...f.parameters?.docs?.source},description:{story:`Required — adds a visible * and a hidden '(required)' for screen readers.`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Email",
    placeholder: "you@example.com",
    required: true,
    error: true,
    helperText: "Email is required.",
    id: "email-req-error"
  },
  parameters: {
    docs: {
      description: {
        story: "Required field in error state — the most complex combination."
      }
    }
  }
}`,...p.parameters?.docs?.source},description:{story:`All error + required features combined.`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Password",
    placeholder: "••••••••",
    type: "password",
    id: "password-story"
  },
  parameters: {
    docs: {
      description: {
        story: "Password input utilizing browser masking (\`type='password'\`)."
      }
    }
  }
}`,...m.parameters?.docs?.source},description:{story:`Password input - utilizes browser masking by setting type="password".`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Age",
    placeholder: "25",
    type: "number",
    min: 0,
    max: 120,
    id: "age-story"
  },
  parameters: {
    docs: {
      description: {
        story: "Number input restricting entry to numeric values with min/max bounds."
      }
    }
  }
}`,...h.parameters?.docs?.source},description:{story:`Number input - exposes browser increment/decrement buttons if applicable.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Search database",
    placeholder: "Search users, transactions, logs...",
    type: "search",
    id: "search-story"
  },
  parameters: {
    docs: {
      description: {
        story: "Search input using \`type='search'\` to support clear controls in compatible browsers."
      }
    }
  }
}`,...g.parameters?.docs?.source},description:{story:`Search input - styled with a search type, exposing clear indicators.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Confirm your registered, verified and primary email address of record",
    placeholder: "name@company.domain.co.uk",
    helperText: "By submitting this, you confirm that you have read all terms of services, privacy policies, data usage terms, cookies policies and agree to receive marketing notifications from our subsidiaries.",
    id: "long-text-story"
  },
  parameters: {
    docs: {
      description: {
        story: "Input displaying text wrap performance under long labels and helper texts."
      }
    }
  }
}`,..._.parameters?.docs?.source},description:{story:`Story demonstrating layout stability with extremely long labels and helper text wrapping.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4 max-w-md">
      <Input size="sm" label="Small size" placeholder="sm input" helperText="Helper text for small input" />
      <Input size="md" label="Medium size (default)" placeholder="md input" helperText="Helper text for medium input" />
      <Input size="lg" label="Large size" placeholder="lg input" helperText="Helper text for large input" />
    </div>
}`,...v.parameters?.docs?.source},description:{story:`All sizes (sm, md, lg) side-by-side.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Playground input",
    placeholder: "Type something…",
    helperText: "This is helper text.",
    error: false,
    disabled: false,
    required: false,
    size: "md",
    id: "playground-input"
  },
  parameters: {
    docs: {
      description: {
        story: "Full interactive playground. Toggle \`error\`, \`disabled\`, \`required\`, \`size\` and edit \`label\` / \`helperText\` live in the **Controls** panel."
      }
    }
  }
}`,...y.parameters?.docs?.source},description:{story:`Interactive playground — use the Controls panel to test every prop.`,...y.parameters?.docs?.description}}},b=[`Default`,`WithLabel`,`WithHelperText`,`ErrorState`,`Disabled`,`Required`,`RequiredWithError`,`Password`,`NumberInput`,`Search`,`WithLongText`,`AllSizes`,`Playground`]})))()}x();export{v as AllSizes,s as Default,d as Disabled,u as ErrorState,h as NumberInput,m as Password,y as Playground,f as Required,p as RequiredWithError,g as Search,l as WithHelperText,c as WithLabel,_ as WithLongText,b as __namedExportsOrder,o as default};