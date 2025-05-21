"use client"

import {
  ArrowUpDown,
  ChevronDown,
  MessageCircle
} from "lucide-react"

import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent
} from "@/components/ui/tabs"

import {
  Table,
  TableHeader,
  TableHead,
  TableRow,
  TableBody,
  TableCell
} from "@/components/ui/table"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select"

// Dummy data
const articles = [
  {
    id: "1",
    title: "How to Improve Your Skills in League of Legends",
    keyword: "league of legends",
    traffic: "2240000",
    words: 4575,
    createdOn: "20 hours ago",
    wordpressIcon: "W",
  },
  {
    id: "2",
    title: "How to Master Last Hitting in League of Legends",
    keyword: "league of legends",
    traffic: "2240000",
    words: 3480,
    createdOn: "21 hours ago",
    wordpressIcon: "W",
  },
  {
    id: "3",
    title: "7 Tips for Better Teamplay in League of Legends",
    keyword: "league of legends",
    traffic: "2240000",
    words: 2676,
    createdOn: "a day ago",
    wordpressIcon: "W",
  },
  {
    id: "4",
    title: "Top Virtual Executive Assistant Services (2024)",
    keyword: "virtual executive assistant",
    traffic: "2900",
    words: 2408,
    createdOn: "1 Oct, 24",
    wordpressIcon: "W",
  },
  {
    id: "5",
    title: "Unlimited Graphics Design Solutions",
    keyword: "unlimited graphic design services",
    traffic: "390",
    words: 1793,
    createdOn: "---",
    wordpressIcon: "W",
  },
  {
    id: "6",
    title: "Top Amazon Payment Methods for Quick Access to Funds",
    keyword: "amazon payment methods",
    traffic: "3600",
    words: 2647,
    createdOn: "---",
    wordpressIcon: "W",
  },
  {
    id: "7",
    title: "Backlinks 101: Why Backlinks Matter (Free Template)",
    keyword: "backlinks",
    traffic: "8100",
    words: 2261,
    createdOn: "---",
    wordpressIcon: "W",
  },
  {
    id: "8",
    title: "7 Leading AI SEO Tools in 2024 (Ranked & Compared)",
    keyword: "ai seo software",
    traffic: "880",
    words: 1543,
    createdOn: "---",
    wordpressIcon: "W",
  },
  {
    id: "9",
    title: "Unlimited Graphic Design Services You Can Rely On",
    keyword: "unlimited graphic design services",
    traffic: "390",
    words: 1974,
    createdOn: "---",
    wordpressIcon: "W",
  },
]

export function ArticlesTable() {
  return (
    <div className="w-full p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-semibold text-center mb-6">Articles</h1>

      <Tabs defaultValue="generated" className="w-full">
        {/* Tab List */}
     <TabsList className="grid grid-cols-4 mb-6">
  <TabsTrigger value="generated" className="data-[state=active]:bg-black data-[state=active]:text-white">
    Generated Articles
  </TabsTrigger>
  <TabsTrigger value="published" className="data-[state=active]:bg-black data-[state=active]:text-white">
    Published Articles
  </TabsTrigger>
  <TabsTrigger value="scheduled" className="data-[state=active]:bg-black data-[state=active]:text-white">
    Scheduled Articles
  </TabsTrigger>
  <TabsTrigger value="archived" className="data-[state=active]:bg-black data-[state=active]:text-white">
    Archived Articles
  </TabsTrigger>
</TabsList>


        {/* Generated Articles Table */}
        <TabsContent value="generated" className="space-y-4">
          <div className="flex justify-center mb-4">
            <Input
              className="max-w-md"
              placeholder="Search articles by title or keyword..."
            />
          </div>

          <div className="rounded-md border overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[40px]"><Checkbox /></TableHead>
                  <TableHead>Title</TableHead>
                  <TableHead>
                    <div className="flex items-center">
                      Keyword [Traffic]
                      <ArrowUpDown className="ml-2 h-4 w-4" />
                    </div>
                  </TableHead>
                  <TableHead>
                    <div className="flex items-center">
                      Words
                      <ArrowUpDown className="ml-2 h-4 w-4" />
                    </div>
                  </TableHead>
                  <TableHead>
                    <div className="flex items-center">
                      Created On
                      <ArrowUpDown className="ml-2 h-4 w-4" />
                    </div>
                  </TableHead>
                  <TableHead>Action</TableHead>
                  <TableHead>Publish</TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {articles.map((article) => (
                  <TableRow key={article.id}>
                    <TableCell><Checkbox /></TableCell>
                    <TableCell className="font-medium">{article.title}</TableCell>
                    <TableCell>{article.keyword} [{article.traffic}]</TableCell>
                    <TableCell>{article.words}</TableCell>
                    <TableCell>{article.createdOn}</TableCell>
                    <TableCell>
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-blue-500 border-blue-500 hover:bg-blue-50"
                      >
                        View
                      </Button>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center">
                        <div className="h-6 w-6 rounded-full bg-blue-500 text-white text-xs flex items-center justify-center mr-1">
                          {article.wordpressIcon}
                        </div>
                        <ChevronDown className="h-4 w-4" />
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* Footer Pagination */}
          <div className="flex items-center justify-between text-sm text-gray-600">
            <div>
              Total {articles.length} Articles | Show
              <Select defaultValue="10">
                <SelectTrigger className="w-[70px] h-8 mx-2">
                  <SelectValue placeholder="10" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="10">10</SelectItem>
                  <SelectItem value="20">20</SelectItem>
                  <SelectItem value="50">50</SelectItem>
                </SelectContent>
              </Select>
              entries per page
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm" disabled>Previous</Button>
              <div className="px-2 py-1 border rounded">1</div>
              <div>/ 1</div>
              <Button variant="outline" size="sm" disabled>Next</Button>
            </div>
          </div>
        </TabsContent>

        {/* Empty Tabs */}
        {["published", "scheduled", "archived"].map(tab => (
          <TabsContent key={tab} value={tab}>
            <div className="flex justify-center items-center h-40 text-gray-500">
              {tab.charAt(0).toUpperCase() + tab.slice(1)} articles will appear here
            </div>
          </TabsContent>
        ))}
      </Tabs>

      {/* Floating Button */}
      <div className="fixed bottom-6 right-6">
        <Button size="icon" className="h-12 w-12 rounded-full bg-green-500 hover:bg-green-600">
          <MessageCircle className="h-6 w-6" />
        </Button>
      </div>
    </div>
  )
}
