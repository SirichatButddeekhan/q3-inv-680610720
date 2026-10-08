import {Drawer,
  DrawerPortal,
  DrawerOverlay,
  DrawerSwipeHandle,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,} from "@/components/ui/drawer";

export function StudentInfo() {
  return (
    // Use Drawer component to display student information
    <Drawer>
      <DrawerTrigger render={<button className="border border-gray-300 rounded-md px-2 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">Sirichat Butdeekhan</button>} />
      <DrawerPortal>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerSwipeHandle />
          <DrawerHeader>
            <DrawerTitle>Student Information</DrawerTitle>
          </DrawerHeader>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <span className="text-sm font-medium text-muted-foreground">Name</span>
              <span className="text-sm">Sirichat Butdeekhan</span>
            </div>
            <img src="./src/assets/images/student-avatar.png" alt="Student Avatar" className="w-32 h-32 rounded-full object-cover" />
            <div className="flex flex-col gap-1">
              <span className="text-sm font-medium text-muted-foreground">Student ID : 680610720</span>
            </div>
          </div>
          <DrawerFooter>
            <DrawerClose>
              <button className="bg-primary text-primary-foreground rounded-md px-4 py-2 hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                Close
              </button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </DrawerPortal>
    </Drawer>
  );
}