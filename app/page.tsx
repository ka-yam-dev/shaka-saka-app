import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { TeamCard } from "@/components/team-card";
import { SearchFilters } from "@/components/search-filters";

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col items-center">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background">
        <div className="container flex h-16 items-center justify-between mx-auto">
          <Link href="/" className="flex items-center gap-2">
            <img src="/logo.png" alt="Logo" className="h-15 w-auto" />
          </Link>
          <div className="flex items-center gap-4">
            <Link
              href="/player-login"
              className="btn bg-blue-500 text-white hover:bg-blue-600 rounded-md px-4 py-2 shadow-md transition duration-200"
            >
              選手ログイン
            </Link>
            <Link
              href="/team-admin-login"
              className="btn bg-green-500 text-white hover:bg-green-600 rounded-md px-4 py-2 shadow-md transition duration-200"
            >
              チーム管理者ログイン
            </Link>
            <Link
              href="/register"
              className="btn bg-orange-500 text-white hover:bg-orange-600 rounded-md px-4 py-2 shadow-md transition duration-200"
            >
              新規登録はこちら
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-800 opacity-90" />
          <div
            className="relative bg-cover bg-center py-20 md:py-32 text-center"
            style={{
              backgroundImage: "url('/placeholder.svg?height=600&width=1200')",
            }}
          >
            <div className="container relative z-10 mx-auto px-4">
              <div className="mx-auto max-w-3xl text-center">
                <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                  サッカーで、大人の青春を。
                </h1>
                <p className="mb-10 text-xl text-white/90">
                  サッカーを愛する社会人のための、チームとプレイヤーのマッチングサービス。
                </p>

                <SearchFilters />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <div className="mb-8 flex items-center justify-center">
              <h2 className="text-3xl font-bold">Featured Teams</h2>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  id="prev-button"
                  aria-label="Previous teams"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  id="next-button"
                  aria-label="Next teams"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="overflow-x-auto pb-4">
                <div className="flex gap-6 justify-center">
                  <TeamCard
                    name="Tokyo Rangers FC"
                    region="関東"
                    level="Competitive"
                    imageUrl="/placeholder.svg?height=200&width=300"
                  />
                  <TeamCard
                    name="Osaka United"
                    region="関西"
                    level="Enjoy"
                    imageUrl="/placeholder.svg?height=200&width=300"
                  />
                  <TeamCard
                    name="Kyoto Samurai"
                    region="関西"
                    level="Competitive"
                    imageUrl="/placeholder.svg?height=200&width=300"
                  />
                  <TeamCard
                    name="Fukuoka Stars"
                    region="九州"
                    level="Enjoy"
                    imageUrl="/placeholder.svg?height=200&width=300"
                  />
                  <TeamCard
                    name="Sapporo Ice"
                    region="Hokkaido"
                    level="Competitive"
                    imageUrl="/placeholder.svg?height=200&width=300"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-muted py-16">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-4 text-3xl font-bold">Why Join SoccerMatch?</h2>
              <p className="mb-10 text-muted-foreground">
                We connect players with teams that match their skill level,
                position preference, and playing style.
              </p>

              <div className="grid gap-8 md:grid-cols-3">
                <div className="rounded-lg bg-card p-6 shadow-md text-center">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-search"
                    >
                      <circle cx="11" cy="11" r="8" />
                      <path d="m21 21-4.3-4.3" />
                    </svg>
                  </div>
                  <h3 className="mb-2 text-xl font-medium">Easy Search</h3>
                  <p className="text-muted-foreground">
                    Find teams based on location, skill level, and position
                    needs.
                  </p>
                </div>

                <div className="rounded-lg bg-card p-6 shadow-md text-center">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-users"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  <h3 className="mb-2 text-xl font-medium">Perfect Match</h3>
                  <p className="text-muted-foreground">
                    Our algorithm ensures you find teams that match your playing
                    style.
                  </p>
                </div>

                <div className="rounded-lg bg-card p-6 shadow-md text-center">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-message-square"
                    >
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    </svg>
                  </div>
                  <h3 className="mb-2 text-xl font-medium">Direct Contact</h3>
                  <p className="text-muted-foreground">
                    Connect directly with team managers to arrange tryouts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t bg-background py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} SoccerMatch. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:underline"
            >
              Terms
            </Link>
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:underline"
            >
              Privacy
            </Link>
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:underline"
            >
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
