// Fix the import path in the component
// This export is solely for the StoryBook and doesn't affect the real app
export const mockUseHandleQRCode = (props: any) => {
  return createHookStub()(props);
};
// Stub implementation for useHandleQRCode
export const createHookStub = (overrides: Record<string, any> = {}) => {
  // Props will be injected when component is rendered
  const useHookStub = (props: UseHandleQRCodeProps) => {
    // Extract restaurant from props (always exists in stories)
    const restaurant = 'restaurant' in props ? props.restaurant : undefined;
    
    // Create a default implementation
    const defaultImplementation = {
      generating: false,
      saving: false,
      success: false,
      error: null,
      qrRef: React.createRef<HTMLDivElement>(),
      qrCodeValue: restaurant ? `/api/restaurants/${restaurant.id}/scan` : "",
      handleGenerate: fn(),
      handleCancel: fn(),
      handleSave: fn(),
      handleDownload: fn(),
    };

    // Return merged implementation with any overrides
    return { ...defaultImplementation, ...overrides };
  };

  return useHookStub;
};

// Create specific hook implementations for different states
const useDefaultHook = createHookStub();

const useGeneratingHook = createHookStub({
  generating: true
});

const useSavingHook = createHookStub({
  generating: true,
  saving: true
});

const useSuccessHook = createHookStub({
  success: true
});

const useErrorHook = createHookStub({
  error: "Failed to save QR code. Network error."
});

// Wrapper to provide the hook as a context
const withHookStub = (Hook: any) => (Story: any) => {
  // Mock the module import in a way that works with Storybook
  React.createElement = ((originalCreateElement) => {
    return function(type: any, props: any, ...children: any[]) {
      // If it's the QRCodeManager component, inject our hook stub
      if (type === QRCodeManager && props) {
        // Override the useHandleQRCode import for this component
        (QRCodeManager as any).__proto__.useHandleQRCode = Hook;
      }
      return originalCreateElement(type, props, ...children);
    };
  })(React.createElement);

  return <Story />;
};
  decorators: [
    withHookStub(useDefaultHook),
  ],
  decorators: [
    withHookStub(useDefaultHook),
  ],
  decorators: [
    withHookStub(useDefaultHook),
  ],
  decorators: [
    withHookStub(useDefaultHook),
  ],
  decorators: [
    withHookStub(useGeneratingHook),
  ],
  decorators: [
    withHookStub(useSavingHook),
  ],
  decorators: [
    withHookStub(useSuccessHook),
  ],
  decorators: [
    withHookStub(useErrorHook),
  ],
  decorators: [
    withHookStub(useDefaultHook),
  ],
  decorators: [
    withHookStub(useDefaultHook),
  ],
  decorators: [
    withHookStub(useDefaultHook),
  ],
  render: () => {
    const restaurantList: Restaurant[] = [
