import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useTheme } from "@/contexts/ThemeContext";
import { Button } from "@/components/ui/button";
import { Moon, Sun, User, Bell, Shield, Save } from "lucide-react";

const Settings = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Settings</h1>
        <p className="text-muted-foreground">Customize your MetaDesk experience</p>
      </div>

      <div className="space-y-6">
        {/* Appearance Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              {theme === 'dark' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
              Appearance
            </CardTitle>
            <CardDescription>
              Customize how MetaDesk looks and feels
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="theme-toggle">Dark Mode</Label>
                <p className="text-sm text-muted-foreground">
                  Switch between light and dark themes
                </p>
              </div>
              <Switch
                id="theme-toggle"
                checked={theme === 'dark'}
                onCheckedChange={toggleTheme}
              />
            </div>
          </CardContent>
        </Card>

        {/* Account Settings Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5" />
              Account Settings
            </CardTitle>
            <CardDescription>
              Manage your account preferences and information
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Email Preferences</Label>
              <p className="text-sm text-muted-foreground">
                Configure how we communicate with you
              </p>
              <div className="pt-2 space-y-3">
                <div className="flex items-center justify-between">
                  <Label htmlFor="marketing-emails" className="font-normal">
                    Marketing emails
                  </Label>
                  <Switch id="marketing-emails" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="product-updates" className="font-normal">
                    Product updates
                  </Label>
                  <Switch id="product-updates" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="security-alerts" className="font-normal">
                    Security alerts
                  </Label>
                  <Switch id="security-alerts" defaultChecked />
                </div>
              </div>
            </div>
            <Separator />
            <div className="space-y-2">
              <Label>Profile Information</Label>
              <p className="text-sm text-muted-foreground">
                Update your personal details and preferences
              </p>
              <Button variant="outline" className="mt-2">
                Edit Profile
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Notifications Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5" />
              Notifications
            </CardTitle>
            <CardDescription>
              Configure how you receive notifications
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Label htmlFor="desktop-notifications" className="font-normal">
                  Desktop notifications
                </Label>
                <Switch id="desktop-notifications" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="email-notifications" className="font-normal">
                  Email notifications
                </Label>
                <Switch id="email-notifications" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="push-notifications" className="font-normal">
                  Push notifications
                </Label>
                <Switch id="push-notifications" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="sound-notifications" className="font-normal">
                  Sound alerts
                </Label>
                <Switch id="sound-notifications" defaultChecked />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Privacy & Security Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              Privacy & Security
            </CardTitle>
            <CardDescription>
              Manage your privacy and security settings
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Label htmlFor="data-collection" className="font-normal">
                  Allow data collection for analytics
                </Label>
                <Switch id="data-collection" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="cookies" className="font-normal">
                  Accept cookies
                </Label>
                <Switch id="cookies" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="two-factor" className="font-normal">
                  Two-factor authentication
                </Label>
                <Switch id="two-factor" />
              </div>
            </div>
            <Separator />
            <div className="space-y-2">
              <Label>Data Management</Label>
              <p className="text-sm text-muted-foreground">
                Control your data and privacy settings
              </p>
              <div className="flex gap-2 mt-2">
                <Button variant="outline" size="sm">
                  Export Data
                </Button>
                <Button variant="outline" size="sm">
                  Delete Account
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Save Changes Button */}
        <div className="flex justify-end">
          <Button className="gap-2">
            <Save className="h-4 w-4" />
            Save Changes
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
