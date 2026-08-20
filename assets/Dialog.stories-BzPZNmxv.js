import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{f as t,n}from"./iframe-Bh66IJ30.js";import{t as r}from"./react-dom-Beoc8kXP.js";import{n as i,t as a}from"./Button-Cmc_x87k.js";import{n as o,t as s}from"./Input-BUODI5Dd.js";function c(e){let t=(0,l.useRef)(null),n=(0,l.useRef)(null);return(0,l.useEffect)(()=>{if(!e||!t.current)return;n.current=document.activeElement;let r=t.current;function i(){return Array.from(r.querySelectorAll(u)).filter(e=>!e.closest(`[aria-hidden='true']`))}i()[0]?.focus();function a(e){if(e.key!==`Tab`)return;let t=i();if(t.length===0){e.preventDefault();return}let n=t[0],r=t[t.length-1];e.shiftKey?document.activeElement===n&&(e.preventDefault(),r.focus()):document.activeElement===r&&(e.preventDefault(),n.focus())}return r.addEventListener(`keydown`,a),()=>{r.removeEventListener(`keydown`,a),n.current instanceof HTMLElement&&document.contains(n.current)&&n.current.focus()}},[e]),t}var l,u;function d(){return(d=e((()=>{l=t(),u=[`a[href]`,`button:not([disabled]):not([aria-disabled='true'])`,`input:not([disabled])`,`select:not([disabled])`,`textarea:not([disabled])`,`[tabindex]:not([tabindex="-1"])`].join(`, `)})))()}function f({open:e,title:t,children:n,footer:r,size:i=`md`,onClose:a}){let o=`${(0,p.useId)()}-title`,s=c(e);return(0,p.useEffect)(()=>{if(!e)return;let t=document.body.style.overflow;return document.body.style.overflow=`hidden`,()=>{document.body.style.overflow=t}},[e]),(0,p.useEffect)(()=>{if(!e)return;function t(e){e.key===`Escape`&&(e.stopPropagation(),a())}return document.addEventListener(`keydown`,t),()=>document.removeEventListener(`keydown`,t)},[e,a]),e?(0,m.createPortal)((0,h.jsxs)(`div`,{className:`fixed inset-0 z-50 flex items-center justify-center p-4`,children:[(0,h.jsx)(`div`,{className:`absolute inset-0 bg-black/50 backdrop-blur-sm`,"aria-hidden":`true`,onClick:a,"data-testid":`dialog-backdrop`}),(0,h.jsxs)(`div`,{ref:s,role:`dialog`,"aria-modal":`true`,"aria-labelledby":o,className:[`relative z-10 flex w-full flex-col rounded-xl bg-surface shadow-elevation-4`,g[i]].join(` `),onClick:e=>e.stopPropagation(),children:[(0,h.jsxs)(`div`,{className:`flex items-center justify-between border-b border-stroke px-6 py-4`,children:[(0,h.jsx)(`h2`,{id:o,className:`text-base font-medium text-content`,children:t}),(0,h.jsx)(`button`,{type:`button`,onClick:a,"aria-label":`Close dialog`,className:`rounded-md p-1 text-content-muted transition-colors duration-150 hover:bg-surface-muted hover:text-content focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand`,children:(0,h.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`16`,height:`16`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,"aria-hidden":`true`,children:(0,h.jsx)(`path`,{d:`M18 6 6 18M6 6l12 12`})})})]}),(0,h.jsx)(`div`,{className:`overflow-y-auto px-6 py-4 text-sm text-content-muted`,children:n}),r&&(0,h.jsx)(`div`,{className:`flex items-center justify-end gap-3 border-t border-stroke px-6 py-4`,children:r})]})]}),document.body):null}var p,m,h,g;function _(){return(_=e((()=>{p=t(),m=r(),d(),h=n(),g={sm:`max-w-sm`,md:`max-w-md`,lg:`max-w-lg`};try{f.displayName=`Dialog`,f.__docgenInfo={description:`Accessible modal dialog for the Faster design system.

Implements WCAG 2.1 AA modal pattern:
- Supports sm, md, and lg size variants
- Focus trap (Tab / Shift+Tab cycle within the dialog)
- Returns focus to the trigger element on close
- aria-modal, role="dialog", aria-labelledby
- ESC key closes
- Backdrop click closes
- Body scroll locked while open`,displayName:`Dialog`,filePath:`/home/runner/work/faster/faster/src/components/Dialog/Dialog.tsx`,methods:[],props:{open:{defaultValue:null,declarations:[{fileName:`faster/src/components/Dialog/Dialog.tsx`,name:`DialogProps`}],description:`Controls dialog visibility.`,name:`open`,parent:{fileName:`faster/src/components/Dialog/Dialog.tsx`,name:`DialogProps`},required:!0,tags:{},type:{name:`boolean`}},title:{defaultValue:null,declarations:[{fileName:`faster/src/components/Dialog/Dialog.tsx`,name:`DialogProps`}],description:`Dialog heading — announced to screen readers via aria-labelledby.`,name:`title`,parent:{fileName:`faster/src/components/Dialog/Dialog.tsx`,name:`DialogProps`},required:!0,tags:{},type:{name:`string`}},children:{defaultValue:null,declarations:[{fileName:`faster/src/components/Dialog/Dialog.tsx`,name:`DialogProps`}],description:`Dialog body content.`,name:`children`,parent:{fileName:`faster/src/components/Dialog/Dialog.tsx`,name:`DialogProps`},required:!0,tags:{},type:{name:`ReactNode`}},footer:{defaultValue:null,declarations:[{fileName:`faster/src/components/Dialog/Dialog.tsx`,name:`DialogProps`}],description:`Optional footer content (e.g. action buttons).
Renders in a bordered footer section below the body.`,name:`footer`,parent:{fileName:`faster/src/components/Dialog/Dialog.tsx`,name:`DialogProps`},required:!1,tags:{},type:{name:`ReactNode`}},size:{defaultValue:{value:`md`},declarations:[{fileName:`faster/src/components/Dialog/Dialog.tsx`,name:`DialogProps`}],description:`Size variant of the dialog panel. sm = max-w-sm, md = max-w-md, lg = max-w-lg.`,name:`size`,parent:{fileName:`faster/src/components/Dialog/Dialog.tsx`,name:`DialogProps`},required:!1,tags:{},type:{name:`enum`,raw:`DialogSize`,value:[{value:`"sm"`},{value:`"md"`},{value:`"lg"`}]}},onClose:{defaultValue:null,declarations:[{fileName:`faster/src/components/Dialog/Dialog.tsx`,name:`DialogProps`}],description:`Fired when the dialog should close.
Triggers on: ESC key, backdrop click, or close button click.`,name:`onClose`,parent:{fileName:`faster/src/components/Dialog/Dialog.tsx`,name:`DialogProps`},required:!0,tags:{},type:{name:`() => void`}}},tags:{}}}catch{}})))()}var v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N;function P(){return(P=e((()=>{v=t(),i(),o(),_(),y=n(),{fn:b,userEvent:x,within:S}=__STORYBOOK_MODULE_TEST__,{useArgs:C}=__STORYBOOK_MODULE_PREVIEW_API__,w={title:`Components/Dialog`,component:f,tags:[`autodocs`],argTypes:{open:{control:`boolean`,description:`Controls dialog visibility. Toggle this in the Controls panel to open / close the dialog interactively.`,table:{category:`State`,defaultValue:{summary:`false`}}},title:{control:`text`,description:"Dialog heading — rendered in the header and announced to screen readers via `aria-labelledby`.",table:{category:`Content`}},children:{control:`text`,description:`Dialog body content. Accepts any React node.`,table:{category:`Content`}},footer:{control:!1,description:`Optional footer content — typically action buttons. Renders in a bordered footer section.`,table:{category:`Content`}},size:{control:`radio`,options:[`sm`,`md`,`lg`],description:`Size variant of the dialog panel width constraints.`,table:{category:`Appearance`,defaultValue:{summary:`md`}}},onClose:{description:`Fired when the dialog should close: ESC key, backdrop click, or close button click.`,table:{category:`Events`}}},args:{onClose:b()},parameters:{docs:{description:{component:`Accessible modal dialog for the Faster design system.

Implements the WCAG 2.1 AA modal pattern:
- **Focus trap** — Tab / Shift+Tab cycles within the dialog
- **Focus restore** — returns focus to the trigger element on close
- \`aria-modal="true"\`, \`role="dialog"\`, \`aria-labelledby\`
- **ESC key** closes the dialog
- **Backdrop click** closes the dialog
- **Body scroll lock** — prevents background scroll while open
- Supports **sm**, **md**, and **lg** size width limits.

Use the **Controls** panel to toggle \`open\` and see the dialog appear/disappear in real time.`}}}},T={args:{open:!1,title:`Confirm action`,children:`Are you sure you want to proceed? This action cannot be undone.`,size:`md`},parameters:{docs:{description:{story:"Minimal dialog. Toggle `open` in the **Controls** panel — or click **Open dialog** — to see it in action."}}},render:function(e){let[{open:t},n]=C();return(0,y.jsxs)(`div`,{className:`flex h-40 items-center justify-center`,children:[(0,y.jsx)(a,{onClick:()=>n({open:!0}),children:`Open dialog`}),(0,y.jsx)(f,{...e,open:t,onClose:()=>{n({open:!1}),e.onClose()}})]})}},E={args:{open:!1,title:`Delete item`,children:`This will permanently delete the selected item and all associated data. This action cannot be undone.`,size:`md`},parameters:{docs:{description:{story:`Dialog with a footer slot containing confirm and cancel actions.`}}},render:function(e){let[{open:t},n]=C();return(0,y.jsxs)(`div`,{className:`flex h-40 items-center justify-center`,children:[(0,y.jsx)(a,{variant:`outline`,onClick:()=>n({open:!0}),children:`Delete item`}),(0,y.jsx)(f,{...e,open:t,onClose:()=>{n({open:!1}),e.onClose()},footer:(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(a,{variant:`ghost`,onClick:()=>{n({open:!1}),e.onClose()},children:`Cancel`}),(0,y.jsx)(a,{variant:`primary`,danger:!0,onClick:()=>{n({open:!1}),e.onClose()},children:`Delete`})]})})]})}},D={args:{open:!1,title:`Terms and Conditions`,size:`md`},parameters:{docs:{description:{story:`When body content overflows, the dialog body scrolls while the header and footer stay fixed.`}}},render:function(e){let[{open:t},n]=C(),r=Array.from({length:6},(e,t)=>`Section ${t+1}: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`);return(0,y.jsxs)(`div`,{className:`flex h-40 items-center justify-center`,children:[(0,y.jsx)(a,{onClick:()=>n({open:!0}),children:`Read terms`}),(0,y.jsx)(f,{...e,open:t,onClose:()=>{n({open:!1}),e.onClose()},footer:(0,y.jsx)(a,{onClick:()=>n({open:!1}),children:`I agree`}),children:(0,y.jsx)(`div`,{className:`space-y-3`,children:r.map((e,t)=>(0,y.jsx)(`p`,{children:e},t))})})]})}},O={args:{open:!1,title:`Edit profile`,size:`md`},parameters:{docs:{description:{story:`A dialog containing input form elements. The focus trap cycles focus correctly through the fields and action buttons.`}}},render:function(e){let[{open:t},n]=C();return(0,y.jsxs)(`div`,{className:`flex h-40 items-center justify-center`,children:[(0,y.jsx)(a,{onClick:()=>n({open:!0}),children:`Edit profile`}),(0,y.jsx)(f,{...e,open:t,onClose:()=>{n({open:!1}),e.onClose()},footer:(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(a,{variant:`ghost`,onClick:()=>{n({open:!1}),e.onClose()},children:`Cancel`}),(0,y.jsx)(a,{variant:`primary`,onClick:()=>{n({open:!1}),e.onClose()},children:`Save changes`})]}),children:(0,y.jsxs)(`form`,{onSubmit:e=>{e.preventDefault(),n({open:!1})},className:`space-y-4`,children:[(0,y.jsx)(s,{label:`Name`,placeholder:`John Doe`,required:!0,id:`form-name`}),(0,y.jsx)(s,{label:`Email`,type:`email`,placeholder:`john@example.com`,required:!0,id:`form-email`})]})})]})}},k={args:{open:!1,title:`Revoke API access token`,children:`This will immediately revoke the access token. Any requests using this token will fail. This action cannot be reversed.`,size:`md`},parameters:{docs:{description:{story:`Destructive confirmation dialog using a warning message and a danger primary action.`}}},render:function(e){let[{open:t},n]=C();return(0,y.jsxs)(`div`,{className:`flex h-40 items-center justify-center`,children:[(0,y.jsx)(a,{variant:`outline`,onClick:()=>n({open:!0}),children:`Revoke token`}),(0,y.jsx)(f,{...e,open:t,onClose:()=>{n({open:!1}),e.onClose()},footer:(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(a,{variant:`ghost`,onClick:()=>{n({open:!1}),e.onClose()},children:`Keep active`}),(0,y.jsx)(a,{variant:`primary`,danger:!0,onClick:()=>{n({open:!1}),e.onClose()},children:`Revoke access`})]})})]})}},A={args:{open:!1,title:`System notice`,children:`Maintenance is scheduled for tonight at 23:00 UTC. The platform will remain online, but minor latency variations might occur.`,size:`md`},parameters:{docs:{description:{story:`A simple informational modal dialog without action buttons in the footer.`}}},render:function(e){let[{open:t},n]=C();return(0,y.jsxs)(`div`,{className:`flex h-40 items-center justify-center`,children:[(0,y.jsx)(a,{onClick:()=>n({open:!0}),children:`Read notice`}),(0,y.jsx)(f,{...e,open:t,onClose:()=>{n({open:!1}),e.onClose()}})]})}},j={parameters:{docs:{description:{story:`Compare width constraints of small, medium, and large dialogs side-by-side.`}}},render:function(e){let[t,n]=(0,v.useState)(null);return(0,y.jsxs)(`div`,{className:`flex items-center justify-center gap-3 h-40`,children:[(0,y.jsx)(a,{variant:`outline`,onClick:()=>n(`sm`),children:`Small Dialog`}),(0,y.jsx)(a,{variant:`outline`,onClick:()=>n(`md`),children:`Medium Dialog`}),(0,y.jsx)(a,{variant:`outline`,onClick:()=>n(`lg`),children:`Large Dialog`}),(0,y.jsxs)(f,{...e,open:t!==null,size:t||`md`,title:`${t?t.toUpperCase():``} Dialog Panel`,onClose:()=>n(null),footer:(0,y.jsx)(a,{onClick:()=>n(null),children:`Close`}),children:[`This dialog panel uses the `,(0,y.jsx)(`strong`,{children:t}),` width configuration.`]})]})}},M={args:{open:!1,title:`Playground Dialog`,children:`Edit the Controls panel below to customise this dialog in real time.`,size:`md`},parameters:{docs:{description:{story:"Full interactive playground. Toggle `open`, edit `title` and `children` in the **Controls** panel."}}},render:function(e){let[{open:t},n]=C();return(0,y.jsxs)(`div`,{className:`flex h-40 items-center justify-center`,children:[(0,y.jsx)(a,{onClick:()=>n({open:!0}),children:`Open playground dialog`}),(0,y.jsx)(f,{...e,open:t,onClose:()=>{n({open:!1}),e.onClose()}})]})},play:async({canvasElement:e})=>{let t=S(e);await x.click(t.getByRole(`button`,{name:/open playground dialog/i}))}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    open: false,
    title: "Confirm action",
    children: "Are you sure you want to proceed? This action cannot be undone.",
    size: "md"
  },
  parameters: {
    docs: {
      description: {
        story: "Minimal dialog. Toggle \`open\` in the **Controls** panel — or click **Open dialog** — to see it in action."
      }
    }
  },
  render: function Render(args) {
    const [{
      open
    }, updateArgs] = useArgs<{
      open: boolean;
    }>();
    return <div className="flex h-40 items-center justify-center">
        <Button onClick={() => updateArgs({
        open: true
      })}>Open dialog</Button>
        <Dialog {...args} open={open} onClose={() => {
        updateArgs({
          open: false
        });
        args.onClose();
      }} />
      </div>;
  }
}`,...T.parameters?.docs?.source},description:{story:"Default dialog — uses `useArgs` so toggling `open` in the Controls panel\nactually opens/closes the dialog. Click the button below to try it.",...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    open: false,
    title: "Delete item",
    children: "This will permanently delete the selected item and all associated data. This action cannot be undone.",
    size: "md"
  },
  parameters: {
    docs: {
      description: {
        story: "Dialog with a footer slot containing confirm and cancel actions."
      }
    }
  },
  render: function Render(args) {
    const [{
      open
    }, updateArgs] = useArgs<{
      open: boolean;
    }>();
    return <div className="flex h-40 items-center justify-center">
        <Button variant="outline" onClick={() => updateArgs({
        open: true
      })}>
          Delete item
        </Button>
        <Dialog {...args} open={open} onClose={() => {
        updateArgs({
          open: false
        });
        args.onClose();
      }} footer={<>
              <Button variant="ghost" onClick={() => {
          updateArgs({
            open: false
          });
          args.onClose();
        }}>
                Cancel
              </Button>
              <Button variant="primary" danger onClick={() => {
          updateArgs({
            open: false
          });
          args.onClose();
        }}>
                Delete
              </Button>
            </>} />
      </div>;
  }
}`,...E.parameters?.docs?.source},description:{story:`Dialog with primary + secondary action buttons in the footer slot.`,...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    open: false,
    title: "Terms and Conditions",
    size: "md"
  },
  parameters: {
    docs: {
      description: {
        story: "When body content overflows, the dialog body scrolls while the header and footer stay fixed."
      }
    }
  },
  render: function Render(args) {
    const [{
      open
    }, updateArgs] = useArgs<{
      open: boolean;
    }>();
    const loremParagraphs = Array.from({
      length: 6
    }, (_, i) => \`Section \${i + 1}: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\`);
    return <div className="flex h-40 items-center justify-center">
        <Button onClick={() => updateArgs({
        open: true
      })}>Read terms</Button>
        <Dialog {...args} open={open} onClose={() => {
        updateArgs({
          open: false
        });
        args.onClose();
      }} footer={<Button onClick={() => updateArgs({
        open: false
      })}>I agree</Button>}>
          <div className="space-y-3">
            {loremParagraphs.map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </Dialog>
      </div>;
  }
}`,...D.parameters?.docs?.source},description:{story:`Dialog with long body content — the body area scrolls independently.`,...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    open: false,
    title: "Edit profile",
    size: "md"
  },
  parameters: {
    docs: {
      description: {
        story: "A dialog containing input form elements. The focus trap cycles focus correctly through the fields and action buttons."
      }
    }
  },
  render: function Render(args) {
    const [{
      open
    }, updateArgs] = useArgs<{
      open: boolean;
    }>();
    return <div className="flex h-40 items-center justify-center">
        <Button onClick={() => updateArgs({
        open: true
      })}>Edit profile</Button>
        <Dialog {...args} open={open} onClose={() => {
        updateArgs({
          open: false
        });
        args.onClose();
      }} footer={<>
              <Button variant="ghost" onClick={() => {
          updateArgs({
            open: false
          });
          args.onClose();
        }}>
                Cancel
              </Button>
              <Button variant="primary" onClick={() => {
          updateArgs({
            open: false
          });
          args.onClose();
        }}>
                Save changes
              </Button>
            </>}>
          <form onSubmit={e => {
          e.preventDefault();
          updateArgs({
            open: false
          });
        }} className="space-y-4">
            <Input label="Name" placeholder="John Doe" required id="form-name" />
            <Input label="Email" type="email" placeholder="john@example.com" required id="form-email" />
          </form>
        </Dialog>
      </div>;
  }
}`,...O.parameters?.docs?.source},description:{story:`Dialog containing form input elements. Tests focus cycle inside the focus trap.`,...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    open: false,
    title: "Revoke API access token",
    children: "This will immediately revoke the access token. Any requests using this token will fail. This action cannot be reversed.",
    size: "md"
  },
  parameters: {
    docs: {
      description: {
        story: "Destructive confirmation dialog using a warning message and a danger primary action."
      }
    }
  },
  render: function Render(args) {
    const [{
      open
    }, updateArgs] = useArgs<{
      open: boolean;
    }>();
    return <div className="flex h-40 items-center justify-center">
        <Button variant="outline" onClick={() => updateArgs({
        open: true
      })}>
          Revoke token
        </Button>
        <Dialog {...args} open={open} onClose={() => {
        updateArgs({
          open: false
        });
        args.onClose();
      }} footer={<>
              <Button variant="ghost" onClick={() => {
          updateArgs({
            open: false
          });
          args.onClose();
        }}>
                Keep active
              </Button>
              <Button variant="primary" danger onClick={() => {
          updateArgs({
            open: false
          });
          args.onClose();
        }}>
                Revoke access
              </Button>
            </>} />
      </div>;
  }
}`,...k.parameters?.docs?.source},description:{story:`Destructive alert modal — highlights critical decisions with danger states.`,...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    open: false,
    title: "System notice",
    children: "Maintenance is scheduled for tonight at 23:00 UTC. The platform will remain online, but minor latency variations might occur.",
    size: "md"
  },
  parameters: {
    docs: {
      description: {
        story: "A simple informational modal dialog without action buttons in the footer."
      }
    }
  },
  render: function Render(args) {
    const [{
      open
    }, updateArgs] = useArgs<{
      open: boolean;
    }>();
    return <div className="flex h-40 items-center justify-center">
        <Button onClick={() => updateArgs({
        open: true
      })}>Read notice</Button>
        <Dialog {...args} open={open} onClose={() => {
        updateArgs({
          open: false
        });
        args.onClose();
      }} />
      </div>;
  }
}`,...A.parameters?.docs?.source},description:{story:`Simple dialog with informational content and no action buttons in the footer.`,...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Compare width constraints of small, medium, and large dialogs side-by-side."
      }
    }
  },
  render: function Render(args) {
    const [size, setSize] = useState<"sm" | "md" | "lg" | null>(null);
    return <div className="flex items-center justify-center gap-3 h-40">
        <Button variant="outline" onClick={() => setSize("sm")}>
          Small Dialog
        </Button>
        <Button variant="outline" onClick={() => setSize("md")}>
          Medium Dialog
        </Button>
        <Button variant="outline" onClick={() => setSize("lg")}>
          Large Dialog
        </Button>
        <Dialog {...args} open={size !== null} size={size || "md"} title={\`\${size ? size.toUpperCase() : ""} Dialog Panel\`} onClose={() => setSize(null)} footer={<Button onClick={() => setSize(null)}>Close</Button>}>
          This dialog panel uses the <strong>{size}</strong> width configuration.
        </Dialog>
      </div>;
  }
}`,...j.parameters?.docs?.source},description:{story:`Comparative demo of all sizes (sm, md, lg) side-by-side.`,...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    open: false,
    title: "Playground Dialog",
    children: "Edit the Controls panel below to customise this dialog in real time.",
    size: "md"
  },
  parameters: {
    docs: {
      description: {
        story: "Full interactive playground. Toggle \`open\`, edit \`title\` and \`children\` in the **Controls** panel."
      }
    }
  },
  render: function Render(args) {
    const [{
      open
    }, updateArgs] = useArgs<{
      open: boolean;
    }>();
    return <div className="flex h-40 items-center justify-center">
        <Button onClick={() => updateArgs({
        open: true
      })}>Open playground dialog</Button>
        <Dialog {...args} open={open} onClose={() => {
        updateArgs({
          open: false
        });
        args.onClose();
      }} />
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole("button", {
      name: /open playground dialog/i
    }));
  }
}`,...M.parameters?.docs?.source},description:{story:"Interactive playground — all props exposed.\nToggle `open` in the Controls panel to open/close the dialog.",...M.parameters?.docs?.description}}},N=[`Default`,`WithFooter`,`LongContent`,`WithForm`,`Destructive`,`NoFooter`,`AllSizes`,`Playground`]})))()}P();export{j as AllSizes,T as Default,k as Destructive,D as LongContent,A as NoFooter,M as Playground,E as WithFooter,O as WithForm,N as __namedExportsOrder,w as default};